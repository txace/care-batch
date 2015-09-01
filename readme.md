#CARE Batch Project

This is a project containing custom scripts to generate and submit the 80 byte files needed to submit data to the CARE system.

##care-submit.usc

The script that creates the care batch file

###install instructions

install to the `$_SYS/SCRIPT/S` directory where `$_SYS` is the path to the CMHC directory you want to install to.

Compile the care-sumbit file with the CMHC compiler


## Batch_Wrap

Wrapper Script that manages the batch process.  It uses the DXCBATparmfile for a significant number of configuration options.  In a nutshell, this script does the following actions.

1. Check to see if the previous CARE Batch file has been archived (we assume it has been sent if it has been archived).  If not, user is notified and processing stops.
1. Check for Batch Holidays that are listed in the parmfile as holiday-n mm/dd/yyyy.  If the system date matches any batch holidays listed, the process will notify the user and processing stops
1. Prompts for the CARE User ID and Password used to FTP the batch file.  Verifies that both fields are data present.  If so, a quick ftp command is issued to the CARE FTP server to confirm that the credentials are correct.  If the credentials are not correct, the user is notified and processing stops.  If the credentials are valid, the process continues.
1. Executes any Pre-Processing Script(s) that may be desired.  Pre-Processing scripts and identified in the parmfile by indicating Prescript-1 <Your Script>, Prescript-2 etc.  If no prescripts are identified in the parmfile, then none will be run.  Some Centers may use this feature to create a saved list to be put into the TXBatch program and the dx-batch script.  May also require that the CLLIST parm be defined in the parmfile.
1. Executes the misprogram TXBATCH5 with the parmfile specified in the parmfile argument.  This will create the standard CARE batch file without the ICD-10 DX Transactions.  Then executes a fold command to make the file an 80byte file as required by CARE.
1. Determines the number of logical transactions created by the TXBATCH5 program and stores this in a variable.  Also removes the footer from the batch file in preparation to append the ICD-10 DX batch transactions
1. Reads the CLLIST saved list file if identified in the parmfile into an array.
1. Executes the script identified by the postscript parm (dx-batch) and passes the parmfile ID, transactions count (step 6 above) and client array (step 7 above).
1. Receives the new transcount value back as an option and creates the new footer transaction and appends this to the batchfile.
1.   Submits the competed batch file to the CARE FTP site using the credentials entered in step three.
1.   Archives the file to the historydir identified in the parmfile.  This step also appends the date to the filename.

## dx-batch 

Creates the DX-10 Batch

1. Creates the ICD-10 DX Batch.  The begin transaction count is passed to this script in the option argument.  Optionally the cllist array can be passed to reduce the number of registers this script must read.
1. Returns the revised transaction count back to the wrapper script to crate the footer record

## Parmfiles

### TXBATCH5 

CMHC program (for creating the Texas Batch sans the DX-10 batch data)

### DXCBAT 

Parm File that is used by each of the project scripts and programs above for configuration.

1. Section 1 - Launch the Script/Batch Process from a menu
  1. SCRIPT Batch-Wrap(YourParmFileHere)
1. Determine if/when the process should run
  1. Holidays-x (List each holiday where you may want to block sending a batch.  This can be helpful for CARE Batch Holidays)

1. Report Only or Live Mode
  1. MarkRecordSent Y/N - This is needed by the dx-batch script and indicates if batched records should be marked as sent by setting the sent flag to be the date of the batch process
  1. REPORTONLY - See CMHC TXSA Documentation
  1. LIVEONLY - See CMHC TXSA Documentation

1. Define file and path locations for the scripts and programs
  1. SEQOUT - See CMHC Documentation – Note, this should be the same value as the batchfilename noted below
  1. batchfilename - This is needed by the dx-batch script.  This should be the same as the SEQOUT value above
  1. batchdir - This is the batch working directory needed by Batch_Wrap and dx-batch
  1. historydir - This is the archive directory where the batch is moved after submitting.
  1. jcl_file - This is the location and filename of the jcl code to be prepended to the batch file.
  1. tracefile - This is the path and filename of the tracefile.  If left blank, no tracefile will be created.
  1. tracefile2 - this is ONLY the name of the tracefile.

1. Things Needed to submit the file
  1. submitfile Y/N - this is needed by the Batch_Wrap script.  If set to N the batch file will not be sent, if set to Y, the batch file will be sent.
  1. remote-sys - this is the url or IP address of the remote FTP server
  1. ITnotify-x - Who to notify on failure.
  1. notify-x - Who to notify when complete

1. Pre & Post Scripts
  1. prescript-x Any Prescripts that may be desired
  1. postscript-x Any Post Scripts that may be desired - Note dx-batch for creating the ICD-10 batch is a postscript.

1. Specific Parms for the dx-batch script.
  1. reg_limit - Limits the number of registers for testing.  Set to 0 to run all clients.
  1. icd10_date - This will control whether the ICD-9 or ICD-10 code will be sent (from the ICD-10 Record).  DX with a date before this date will get ICD-9 and after this date will get ICD-10.  For full production, this should be set to 10/01/2015.  But it can be different for testing purposes.
  1. MAP_c.suffix enter the DST Short Name of the Suffix DST in your system in ALL CAPS.  If you do not have this DST, just leave blank
  1. MAP_c.reg.sub enter the DST Short Name of the Registration Submit Flag in your system.  The DX10 transaction will not be sent if this DST is !DP.
  1. MAP_c.careid enter the DST Short Name of the CARE ID DST in your system.  If you do not have this DST or data, leave this blank.
  1. Transcount - This is the count where the dx-batch script should start assigning logical transaction count.  If dx-batch is run as stand alone, this should be set to 0.  Otherwise Batch_Wrap will send the correct transaction count to dx-batch.  In most cases, this can be left a 0 since Batch_Wrap will handle the count.

1. Identifying Center and Batch
  1. comp_code - needed by dx-batch to set the comp code.  
  1. COMPCODE - needed by TXBATCH5 to set the comp code for the CMHC Batch program.  Will look at merging this with comp_code.
  1. BATCHNO - is needed by the TXBATCH5 to set the Batch ID.  Dx-batch has this defaulted to T1.  We are looking at managing both TXBATCH5 and dx-batch from this parm.
  1. care_userid - this is used by dx-batch to fill the userid field in the batch transaction
  1. USERID - this is used by the TXBATCH5 program to populate the userid field in the batch transaction.  We will look at merging d & e in a future revision.

1. Remaining Parms needed for the TXBATCH5 program.  This can almost be a copy and paste of a Center’s existing TXBATCH5 program.  Note the use and commenting out of some parms.  But the that DST’s that are being used for each of the CARE Transaction records should remain un changed.

