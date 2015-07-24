## CARE Batch 

### Registration Transaction

|Physical Record # | Relative Position | Element Name | Care Name | Usage | Type | Length | Required | Description | Validation |
| ---------------- | ----------------- | ------------ | --------- | ----- | ---- | ------ | -------- | ----------- | ---------- |
|1|1|Component Code|COMP|Key|N|3|Y||Must equal your TDMHMR component code.
|1|4|Record Type|REC_TYPE|Key|N|1|Y|Transaction data record.Must equal '1'.
|1|5|Transaction Code|TRANS|Key|N|2|Y|Batch registration transaction.  Must equal '05'
|1|7|Transaction Format Version|TRANS_VER|Key|A|1|Y|Current version of transaction.Must equal 'A'.
|1|8|Logical Transaction Number|LOG_TRANS_NO|Key|N|6|Y|Logical transaction number in transaction file.Logical transaction numbers must be in ascending order in transaction file.
|1|14|Physical Record Number|PHY_REC_NO|Key|N|2|Y|Physical record sequence number within logical transaction.Must equal '01'.
|1|16|Batch Number|BATCH_NO||A|2||Assigned by component.This information is for component cross-reference use only.
|1|18|Transaction Enter Date|TRANS_ENTER_DATE||D|8|Y|Date transaction was entered.
|1|26|USER ID|USER_ID|||A|5||User ID of the person that entered the transaction on your local computer system.  
|1|31|Local Case Number|CASE ||A|10|Y|Local case number must be unique within your component.Local case number must already Exist on care for your component.Must not be entirely alphabetic.  Must not begin with 'Y'.
|1|41|Last Name|LASTNM||A|16|Y|
|1|57|Suffix|LAST_SUF||A|3| |'JR.','SR.','I, 'II'. ETC..
|1|68|First Name|FIRSTNM|||A|11|Y
|1|71|Middle Name|MIDNM||A|10||
|2|1|Component Code|COMP|KEY|N|3|Y|Must equal your TxMHMR Component Code.
|2|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record.Must equal '1'.
|2|5|Transaction Code|TRANSKEY||N|2|Y|Batch registration transaction.Must equal '05'.
|2|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction.Must equal 'A'.
|2|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file.Logical transaction numbers must be in ascending order in transaction file.
|2|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction.Must equal '02'.
|2|16|Sex|SEX||A|1|Y|See 'SEX' decode table.
|2|17|New Race|RACE (old ethnicity)||A|1|Y|See 'RACE' decode table.
|2|18|Birthdate|BIRTH_DT||D|8|Y|Must be < registration date.
|2|26|Social Security Number|SSN||A|9|Y|Must be all numeric digits (except all zeros), or 'N' for none, or 'U" for unknown.
|2|35|Presenting Problem|PRES_PROG||N|1|Y||See 'PRESENTING PROBLEM' decode table.
|2|36|Registration Date|EFF_DT||D|8|Y||Registration date must be < = transaction enter date.
|2|44|Registration Time|REG_TM||T|4|Y
|2|48|Street|STREET||A|25
|3|1|Component Code|COMP|KEY|N|3|Y||Must equal your TxMHMR  component code.
|3|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record. Must equal '1'.
|3|5|Transaction Code|TRANS|KEY|N|2|Y|Batch registration transaction.Must equal '05'.
|3|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction.  Must equal 'A'.
|3|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file.Logical transaction numbers Must be in ascending order in Transaction file.  
|3|14|Physical Record Number|PHY_REC_NO|KEY |N|2|Y|Physical record sequence number within logical transaction.Must equal '03'.
|3|16|City|CITY||A|20|||Cannot be numeric.  Can have the following special characters: blanks, "-", ".", or "/".
|3|36|State|STATE||A|2|||Must be a standard two letter state abbreviation.
|3|38|Zip Code|ZIP||N|5|||Must be numeric and 5 characters In length.  Zip Code is required if a city and state are included.
|3|43|Zip Code Suffix|ZIPSUF||N|4|||Must be numeric and 4 characters in length.
|3|47|County of Residence|CNTY||N|3|Y||See 'COUNTY CODE' decode table.
|3|50|New Federal Ethnicity|NEW_FED_ETH||A|3|||See 'NEW ETHNIC' decode table.
|3|53|Marital Status|MAR_STAT||N|1|||See 'MARITAL STATUS' decode table.
|3|54|Annual Income|GROSS_INC||N|10||Family income (COBOL picture is 9(10).  No digits to right of implied decimal point).  
|3|64|Family Size|FAM_SIZE||N|2||Number of members in immediate family.
|4|1|Component Code|COMP|KEY|N|3|Y||Must equal your TxMHMR com- ponent code.
|4|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record. Must equal '1'.
|4|5|Transaction Code|TRANS|KEY|N|2|Y|Batch registration transaction.Must equal '05'.  
|4|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction.Must equal 'A'.
|4|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file.Logical transaction numbers must be in ascending order in transac- tion file.
|4|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction.Must equal '04'.
|4|16|Primary Correspondent Name|PRIM_COR_NM||A|25|||Required if any primary correspondent information is entered.
|4|41|Primary Correspondent Street|PRIM_COR_STREET||A|25|
|5|1|Component Code|COMP|KEY|N|3|Y||Must equal your TxMHMR Component code.
|5|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record.Must equal '1'.
|5|5|Transaction Code|TRANS|KEY|N|2|Y|Batch registration transaction.Must equal '05'.
|5|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction.Must equal 'A'.
|5|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file.Logical transaction numbers must be in ascending order in transaction file.
|5|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction. Must equal '05'.
|5|16|Primary Correspondent City|PRIM_COR_CITY||A|20|||Must not be numeric.  Can have the following special characters: blanks, "/", ".", or "-".
|5|36|Primary Correspondent State|PRIM_COR_STATE||A|2|||Must be a standard two letter state abbreviation
|5|38|Primary Correspondent Zip|PRIM_COR_ZIP||N|5|||Required if primary correspondent zip code suffix is entered.  
|5|43|Primary Correspondent Zip Suffix|PRIM_COR_ZIPSUF||N|4 
|5|47|Primary Correspondent Phone|PRIM_COR_PHONE||N|10|||Area code concatenated with phone number; no dashes
|5|57|Primary Correspondent Relation|PRIM_COR_RELATION||N|2|||See 'RELATIONSHIP' decode table.
|6|1|Component Code|COMP|KEY|Y|3|Y||Must equal your TxMHMR component code.
|6|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record.Must equal '1'.
|6|5|Transaction Code|TRANS|KEY|N|2|Y|Batch registration transaction.Must equal '05'.
|6|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction. Must equal 'A'.
|6|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file. Logical transaction numbers must be in ascending order in transaction file.
|6|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction. Must equal '06'.
|6|16|Secondary Correspondent Name|SEC_COR_NAME||A|25|||Required if any secondary information is entered.
|6|41|Secondary Correspondent Street|SEC_COR_STREET||A|25||
|7|1|Component Code|COMP|KEY|N|3|Y||Must equal your TxMHMR component code.
|7|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record. Must equal '1'.
|7|5|Transaction Code|TRANS|KEY|N|2|Y|Batch registration transaction.Must equal '05'.
|7|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction.Must equal 'A'.
|7|8|Logical|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file.Logical transaction numbers must be in ascending order in transaction file.
|7|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction.Must equal '07'.
|7|16|Secondary Correspondent City|SEC_COR_CITY||A|20|||Must not be numeric.  Can have the following special characters: blanks, "/", ".", "-".
|7|36|Secondary Correspondent State|SEC_COR_STATE||A|2|||Must be a standard two letter state abbreviation.
|7|38|Secondary Correspondent Zip|SEC_COR_ZIP||N|5|||Required if secondary correspondent zip code suffix is entered.  
|7|43|Secondary Correspondent Zip Suffix|SECON_COR_ZIPSUF||N|4 
|7|47|Secondary Correspondent Phone|SEC_COR_PHONE||N|10|||Area code concatenated with phone number; no dashes.
|7|57|Secondary Corresondent Relation|SEC_COR_RELATION||N|2|||Required if any secondary information is provided.  See 'RELATIONSHIP' decode table.
|7|59|Commitment Type|COMMIT_TYPE||N|2|||Required if any commitment information is entered.  See "COMMIT2" decode table.
|7|61|Commitment Date|COMMIT_DT||D|8|||Required if any commitment information is entered.  Must be < = registration date.
|7|69|Commitment Expiration Date|COMMIT_EXPDT||D|8|||Required if any commitment information is entered.   Must be > COMMITMENT DATE.  May equal "n" for not applicable.
|8|1|Component Code|COMP|KEY|N|3|Y||Must equal your TxMHMR Component code.
|8|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record.Must equal '1'.
|8|5|Transaction Code|TRANS|KEY|N|2|Y|Batch registration transaction.Must equal '05'.
|8|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction.  Must equal 'A'.
|8|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file.  Logical transaction numbers must be in ascending order in transaction file.  
|8|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logcal transaction.Must equal '08'.
|8|16|Cause Number|COMMIT_CAUSE||A|10||Court cause number.If commitment type does not equal '01' (voluntary), or '31' (administra- tive hold) and does not equal '02' (respite), then this field is required.
|8|26|Commitment County|COMMIT_CNTY||N|3|||If commitment type does not equal '01' (voluntary), or '03' (emergency) and does not equal '02' (respite), then this field is required.  See 'COUNTY CODES' decode tables.
|8|29|Legal Status|LEG_STAT||N|1|||See 'LEGAL STATUS' decode table.
|8|30|Recipient  Number|RECIP_NO||A|9||Medicaid number 
|8|39|HIC Number|HIC_NO||A|12||Medicare number 
|8|51|Effective Date|EFF_DT||N|8|Y|Begin date of Medicare eligibility Required for Medicare #
|8|59|End Date|END_DT||N|8||
