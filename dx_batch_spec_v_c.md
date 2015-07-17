# BATCH TRANSACTION RECORD LAYOUT

## Name:  Batch Diagnostic Data Transaction

### Formatting Specifications

|FIELD TYPE| GLOBAL FORMAT | GLOBAL ATTRIBUTES |
| -------- | ------------- | ----------------- |
|(N)UMERIC|| Character format, whole number, right justified, leading zeroes, not specified value=zeros |
|(A)LPHA-NUMERIC || Left justified, padded spaces, not specified value=spaces |
|(T)IME| HHMM| Character format, numeric digits, 24 hour military time, HH=HOUR (00-23) MM=MINUTES (00-59), not specified value=spaces |
|(D)ATE| YYYYMMDD| Character format, numeric digits, YYYY=YEAR, MM=MONTH, DD=DAY, not specified value=spaces ||

### Specification

|PHY REC # | REL POS | DATA ELEMENT NAME | CARE FIELD NAME | USAGE | TYPE | LEN | REQ | DESCRIPTION | VALIDATION |
|----------| ------- | ----------------- | --------------- | ----- | ---- | --- | --- | ----------- | ---------- |
|1|1|Component Code | COMP| Key   |   N  |  3  |  Y  || Must equal your component code|
|1|4|Record Type|REC_TYPE|Key|N|1|Y|Transaction data record|Must equal '1'|
|1|5|Transaction Code|TRANS|Key|N|2|Y|Batch diagnostic data transaction|Must equal '15'|
|1|7|Transaction Format Version|TRANS_VER|Key|A|1|Y|Current version of transaction|Must equal 'C'|
|1|8|Logical Transaction Number|LOG_TRANS_NO|Key|N|6|Y|Logical transaction number in transaction file|Logical transaction numbers must be in ascending order in transaction file|
|1|14|Physical Record Number|PHY_REC_NO|Key|N|2|Y|Physical record sequence number within logical transaction|Must equal '01'|
|1|16|Batch Number|BATCH_NO||A|2||Assigned by component|This information is for component cross-reference use only|
|1|18|Transfer Enter Date|TRANS_ENTER_DT||D|8|Y|Date transaction was entered|
|1|26|User ID|USER_ID||A|5||User ID of the person that entered the transaction on your local computer system|
|1|31|Local Case Number|CASE||A|10|Y|Local case number must be unique within your component|Local case number must already exist on CARE for your component must not be entirely alphabetic  Must not begin with 'Y'|
|1|41|Client ID|ID||N|10||Client ID number assigned by CARE (if known)|
|1|51|Last Name|LASTNM||A|16|Y||Last name must match last name on CARE|
|1|67|Suffix|LAST_SUF||A|3||'JR.', 'SR.', 'I', 'II', Etc.|
|1|70|First Name|FIRSTNM||A|11|Y||First initial must match first initial on CARE|
|1|1|Component Code|COMP|KEY|N|3|Y||Must equal your component code|
|2|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record|Must equal '1'|
|2|5|Transaction Code|TRANS|KEY|N|2|Y|Batch diagnostic data transaction|Must equal '15'|
|2|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction|Must equal 'C'|
|2|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file|Logical transaction numbers must be in ascending order in transaction file|
|2|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction|Must equal '02' |
|2|16|Middle Name|MIDNM||A|10|||
|2|26|Date of Staff Decision|EFF_DT||D|8|Y||Must Be > = registration dateMust be < = transaction enter date  If diagnostic data already exists for this client with the same decision date and time, this transaction will be rejected|
|2|34|Filler -  Time of Staff|EFF_DT||T|4||Time of Diagnosis|
|2|38|DecisionReason for Action|REAS_ACT||A|1|Y||See 'DIAG_ACTION' decode table|
|2|39|Principal Diag Axis|AXIS_IND||A|1|N||See 'DIAG_PRIN_DIAG_AXIS' decode table|
|2|40|Axis I  Level 1|DSM11||A|7|||This field is required if principal Diag Axis equals '1' or principal diag axis is not enteredSee 'DSM_CODES' decode table |
|2|47|Axis I  Level 2|DSM12||A|7|||See 'DSM_CODES' decode table |
|2|54|Axis I  Level 3|DSM13||A|7|||        ''|
|2|61|Axis I  Level 4|DSM14||A|7|||        ''|
|2|68|Axis I  Level 5|DSM15||A|7|||        ''|
|3|1|Component Code|COMP|KEY|N|3|Y||Must equal your component code|
|3|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record|Must equal '1'|
|3|5|Transaction Code|TRANS|KEY|N|2|Y|Batch diagnostic data transaction|Must equal '15'|
|3|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction|Must equal 'C'|
|3|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file|Logical transaction numbers must be in ascending order in transaction file|
|3|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction|Must equal '03'|
|3|16|Axis I  Level 6|DSM16||A|7|||        See DSM_CODES|
|3|23|Axis II Level 1|DSM21||A|7|||This field is required if principal DIAG AXIS equals '2'|
|3|30|Axis II Level 2|DSM22||A|7|||        ''|
|3|37|Axis II Level 3|DSM23||A|7||||
|3|44|Axis II Level 4|DSM24||A|7||||
|3|51|Filler|||A|15||||
|3|66|Current ABL|ABL_CUR||A|1|||See 'DIAG_ABL' decode tableThis field is required if principal diagnosis is MR (i.e. principal DIAG AXIS equals '2' and DSM_VER = 'R' and the first 3 digits of Axis II Level 1 equal '317', '318' or |
|3|67|Potential ABL|ABL_POT||A|1|||See 'DIAG_ABL' decode table|
|3|68|Primary AAMD|AAMD_PRIM||A|3|||See 'AAMD_CLASS' decode table|
|3|71|Secondary AAMD|AAMD_SEC||A|3|||        ''|
|3|74|Tertiary AAMD|AAMD_TERT||A|3|||        ''|
|3|77|Genetic Component|GEN_COMP||A|2|||See 'AAMD_GEN_COMP' decode table|
|3|79|Cranial Anomaly|CRAN_ANOM||A|2|||See 'AAMD_CRA_ANOM' decode table|
|4|1|Component Code|COMP|KEY|N|3|Y||Must equal your component code|
|4|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction data record|Must equal '1'|
|4|5|Transaction Code|TRANS|KEY|N|2|Y|Batch diagnostic data transaction|Must equal '15'|
|4|7|Transaction Format Version|TRANS_VER|KEY|A|1|Y|Current version of transaction|Must equal 'C'|
|4|8|Logical Transaction Number|LOG_TRANS_NO|KEY|N|6|Y|Logical transaction number in transaction file|Logical transaction numbers must be in ascending order in transaction file|
|4|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction|Must equal '04'|
|4|16|Sensory Impairment|SENS_IMPAIR||A|2|||See 'AAMD_SENS_IMP' decode table|
|4|18|Perception|PERCEPT||A|2|||See 'AAMD_PERCEP' decode table|
|4|20|Convulsive Disorder|CONVULS_DIS||A|2|||See 'AAMD_CON_DIS' decode table|
|4|22|PSY Impairment|PSY_IMPAIR||A|2|||See 'AAMD_PSY_IMP' decode table|
|4|24|Motor Dysfunction|MOTOR_DYS||A|2||First 2 digits of Motor Dysfunction code described in glossary|See 'AAMD_MOT_DYSF' decode table|
|4|26|Motor Location|MOTOR_LOC||A|1||Third digit of Motor Dysfunction|See 'AAMD_MOT_DYSF_LOC' decode table|
|4|27|Motor Severity|MOTOR_SEV||A|1||Fourth digit of Motor Dysfunction|See 'AAMD_MOT-DYSF-SEV' decode table|
|4|28|AAMD Date|AAMD_DT||D|8|||Must be < = transaction enter dateMust be < = decision date|
|4|36|IQ Score|IQ||N |3|||Required if either IQ test or IQ test date is specifiedMust be  '150'|
|4|39|IQ Test|IQ_TEST||N|2|||Required if either IQ score or IQ test date is specifiedSee 'IQ' decode table|
|4|41|IQ Test Date|IQ_TEST_DT||D|8|||Required if either IQ score or IQ test is specifiedMust be < = transaction enter date|
|4|49|SQ Score|SQ||N |3|||Required if either SQ test or SQ test date is specifiedMust be < '150'|
|4|52|SQ Test|SQ_TEST||N|2|||Required if either SQ score or SQ test date is specifiedSee 'SQ' decode table|
|4|54|SQ Test Date|SQ_TEST_DT||D|8|||Required if either SQ score or SQ test is specifiedMust be < = transaction enter date|
|4|62|AAMD Version|AAMD_VERS||A|2|Y||Must equal '77'|
|4|64|Axis 1&2 Version|AXIS12_VERS||A|2|Y||Must equal '10' for ICD10, if date staff decision is 10/1/2015 or later.  Forms dated prior to that may be '4' for DSM IV   ‘T’if using diagnostic classification 0-Three.  |
|4|66|Axis III Version|AXIS3_VERS||A|2|Y||Must equal '10' on and later than 10/01/2015 and ‘09’ prior|
|4|68|AXIS V Cur|AXIS5_CUR||A|2|||Level of functioning|
|4|70|AXIS V Prev|AXIS5_PREV||A|2|||See decode table|
|4|72|AXIS IV-1|AXIS 41||A|1|||In Axis IV-1 thru IV-9, at least 1 value is required for MH diagnosisSee Axis IV decode table|
|4|73|AXIS IV-2|AXIS 42||A|1||||
|4|74|AXIS IV-3|AXIS 43||A|1||||
|4|75|AXIS IV-4|AXIS 44||A|1||||
|4|76|AXIS IV-5|AXIS 45||A|1||||
|4|77|AXIS IV-6|AXIS 46||A|1||||
|4|78|AXIS IV-7|AXIS 47||A|1||||
|4|79|AXIS IV-8|AXIS 48||A|1||||
|4|80|AXIS IV-9|AXIS 49||A|1|||
|5|1|Component|COMP|KEY|N|3|Y||Must equal your component code|
|5|4|Record Type|REC_TYPE|KEY|N|1|Y|Transaction Data record|Must equal ‘1’|
|5|5|Transaction Code|TRANS|Key|N|2|Y|Batch diagnostic data transaction|Must equal ‘15’|
|5|7|Transaction Format Version|TRANS_VER|Key|A|1|Y|Current version of transaction|Must equal ‘C’|
|5|8|Logical Transaction Number|PHY_REC_NO|Key|N|6|Y|Logical transaction number in transaction file|Logical transaction numbers must be in ascending order in transaction file|
|5|14|Physical Record Number|PHY_REC_NO|KEY|N|2|Y|Physical record sequence number within logical transaction|Must equal ‘05’|
|5|16|Axis III Level 1|ICD31||A|7||ICD31|If reason for action equals '3' (DEATH), then Axis III Level I ICD code is required for axis 31. Also required if reason for action = 2  for MH clients in community centers/BHOs.|
|5|23|Axis III Level 2|ICD32||A|7||ICD32|See ICDCODES|
|5|30|Axis III Level 3|ICD33||A|7||ICD33|  “|
|5|37|Axis III Level 4|ICD34||A|7||ICD34|“|
|5|44|Axis III Level 5|ICD35||A|7||ICD35|“|
|5|51|Axis III Level 6|ICD36||A|7||ICD36|“|
|5|58|Date of Axis III|AXIS3_DT||D|8|||Must be < = decision date|
