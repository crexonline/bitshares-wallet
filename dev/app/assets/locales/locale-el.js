module.exports = {

languages: {

	sq: 'Albanian; sq (Gjuha Shqipe)',
	ar: 'Arabic;  (العربية)',
	bs: 'Bosnian;  (Bosanski Jezik)',
	bg: 'Bulgarian; bg (български език)',
	zh: 'Chinese, Simplified/Mandarin; zh (中文)',
	hr: 'Croatian; hr (Hrvatski Jezik)',
	en: 'English; en (English)',
	fi: 'Finnish; fi (Suomi)',
	fr: 'French; fr (Français)',
	de: 'German; de (Deutsch)',
	el: 'Greek; el (ελληνικά)',
	hi: 'Hindi; hi (हिन्दी, हिंदी) ',
	hu: 'Hungarian; hu (Magyar)',
	it: 'Italian; it (Italiano)',
	ja: 'Japanese; ja (日本語)',
	pl: 'Polish; pl (Język Polski)',
	ro: 'Romanian; ro (Română)',
	ru: 'Russian; ru (Русский)',
	sr: 'Serbian; sr (Cрпски Jезик (Srpski))',
	sk: 'Slovak; sk (Slovenčina)',
	es: 'Spanish; es (Español)',
	tr: 'Turkish; tr (Türkçe)'
 },
 

  wallet: {

    switch_language: 'Switch Language: ',
    // additional
    existing_password: "Existing PIN",
    verify: "Verify",
    enter_password: "Enter PIN",
    reset: "Reset",
    //change_password: "Change PIN",
    accept: "Accept",
    transaction_sent: "sent",
    transaction_to: "To",
    transaction_op: "All",
    transaction_info: "Info",
    transaction_date: "Date",
    transaction_fee: "Fee",
    transaction_from: "From",
    transaction_amount: "Amount",
    was_reg_account: "registered by",
    fraudAttemptMessage: 'Fraud Attempt! (on 3 consecutive incorrect PINs)',     //duplicate
    sync_block: "Block #",
    transfer_available: 'is available',
    //settings_hideDonations : 'Hide Donations from homescreen Transactions list',  // replaced with wallet.home.hideDonations
    account_name : 'Account name',
    account_name_is_taken: 'Account name is already taken',
    account_not_found: 'Account_not_found',
    enter_valid_account_name : "Please enter valid account name",
    account_premium_name_warn: "This is a premium name. Premium names are more expensive and can't be registered for free by faucet. Try to select another name containing at least one dash, number or no vowels.",
    done: 'Done',
    no_funds: 'No funds',
    account_not_yours: 'Account not yours',
    donation_fee_text: ' (network + 2 BTS donation)',
    account_errors_unknown : 'Unknown account',
    confirm: 'Confirm',
    success_exclaim: 'Success!',
    account_errors_invalid : 'Invalid account',
    account_more : 'More',
    brainkey_backup : 'Backup brainkey',
    wallet_brainkey: 'Wallet brainkey',
    close: 'Close',
    verified: 'verified',
    wallet_created: "Wallet Created",
    import_bts1: "Import from Brainkey",
	import_backup: "Import Backup",
	wallet_name :   "Wallet Name",
	contactDeleteConfirm: 'Are you SURE you want to permanently DELETE this Contact?',
	contactFriendlyName: 'Friendly name',
	contactNotes: 'Notes',
	save: 'Save',
	add: 'Add',
	ok: 'Ok',
	to_slash_from: 'To/From',
	unlock: 'Unlock',
	tran_confirm: 'Confirm transaction',
	email: 'E-mail',
	contact_email_hint : 'To display a photo for this Contact, enter its Gravatar e-mail here',
	contact_does_exist : 'Contact with this name already exists',
	unlock_wallet : 'Unlock Wallet',
	six_digits_pin : '6-digits PIN',
	six_digits_pin_confirm : '6-digits PIN confirm',	
	clipboard: 'Clipboard',
	out_of_balance: 'Insufficient balance',
	create_wallet: "Create Wallet",
	brainkey_imcompatible_ln1: "This BrainKey is not compatible with BTS 1.0",
	brainkey_imcompatible_ln2: "(Use a backup file instead)",
    brainkey: "Brainkey",
	custom_brainkey: "Custom brainkey",
	choose_backup: "Choose backup",
    invalid_format: "Invalid Format",
	to_accept_agreement:  "To accept the agreement",
	agreement: "Agreement",
	acnt_createRegisterOrImport: "ACCOUNT CREATE/REGISTER OR IMPORT",
	create: "Create",
	existing_account: "Existing account",
    create_backup: "Create Backup", // create_backup, reset(-), download, createBackupPrompt - are moved from .backup section
    download: "Download",
    createBackupPrompt: 'Please make backup of your wallet to continue',
	requirePinToOpen: 'Require PIN to open wallet',

home: {
balances: "ΥΠΟΛΟΙΠΑ",
contacts: "ΕΠΙΚΟΙΝΩΝΙΑ",
finder: "FINDER",
exchange: "ΑΝΤΑΛΛΑΓΗ",
receive: "ΛΑΒΕΤΕ",
send: "ΑΠΟΣΤΟΛΗ",
balances: "Υπόλοιπα",
transactions: "συναλλαγές",
date: "ημερομηνία",
all: "Όλα",
sent: "αποστέλλονται",
recd: "REC'D",
to: "να",
from: "από",
amount: "ποσό",
asset: "Ενεργητικού",
name: "όνομα",
account: "Λογαριασμός",
memo: "υπόμνημα",
donateToDevs: "Δωρεά 2 BTS για τους προγραμματιστές υποστήριξης στο BitShares Μunich",
hideDonations: "Απόκρυψη Δωρεές από τη λίστα Συναλλαγές homescreen",
requestSpecificAmount: "Ζητήσει ένα συγκεκριμένο ποσό (προαιρετικό)",
sharePaymentRequest: "Κοινή χρήση αυτής της Αίτησης Πληρωμής",
inviteFriend: "Προσκαλέστε ένα φίλο",
buyLifetimeAnnual: "Αγοράστε μια ζωή ή Ετήσια Συνδρομή",
continue: "Συνέχεια",
buy: "Αγορά",
sell: "Πουλήστε",
cancel: "Ακύρωση",
back: "πίσω",
none: "Κανένας",
please_wait: "Παρακαλώ περιμένετε",
thank_you: "Ευχαριστώ",
balance: "ισορροπία",
publicKey: "Δημοσίου Κλειδιού",
privateKey: "ιδιωτικού κλειδιού",
yes: "ναί",
no: "Κανένα",
remaining_balance: "Εναπομείναν ποσό",
excess_amount: "Δεν μπορείτε να στείλετε το ποσό πάνω από το ποσό χρέωσης",
backup_asset: "αντιγράφων ασφαλείας Ενεργητικού",
reward_points : "Πόντοι επιβράβευσης"

}, settings: {
bitsharesWalletSettings: "BitShares Ρυθμίσεις Πορτοφόλι",
taxableCountry: "Φορολογητέο Χώρα",
preferredLanguage: "προτιμώμενη γλώσσα",
displayDtAs: "Ημερομηνίες εμφάνισης και Times ως",
getPricesFrom: "Πάρτε τις τιμές από",
additionalSettings: "Πρόσθετες ρυθμίσεις",
checkUpdatesStartup: "Έλεγχος για ενημερώσεις κατά την εκκίνηση",
autoInstallMajorVer: "Αυτόματη εγκατάσταση σημαντικές νέες εκδόσεις",
requirePinToSend: "Απαιτείται το PIN για την αποστολή χρημάτων",
autoCloseWalletAfterInactivity: "Αυτόματη κοντά BitShares Πορτοφόλι μετά από 3 λεπτά αδράνειας",
searchTransactions: "Αναζήτηση Συναλλαγές",
exportTransactionsTo: "Συναλλαγές Εξαγωγή σε :",
alwaysDonateDevsMunich: "Πάντα δωρίσει 2 BTS για τους προγραμματιστές Υποστήριξη σε BitShares Μόναχο (bitshares-munich)",
allowUse_GpsToFind: "Αφήστε το Finder (v2.0) για να χρησιμοποιήσετε το GPS για να βρείτε το πλησιέστερο ΑΤΜ, οι άνθρωποι και τα συστήματα POS με Smartcoins",
allowReportPosition : "Αφήστε το Finder (v2.0) να αναφέρει την θέση σας, έτσι ώστε οι άλλοι μπορούν να αγοράζουν ή να πωλούν Smartcoins μαζί σας",
pinNumber: "Τον αριθμό PIN",
createEditPin: "Δημιουργήσετε ή να επεξεργαστείτε 6-ψήφιο κωδικό PIN για να εξασφαλίσει τα κεφάλαια και τους λογαριασμούς σας",
editPin: "Επεξεργαστείτε 6-ψήφιο κωδικό PIN για να εξασφαλίσει τα κεφάλαια και τους λογαριασμούς σας",
secureWithPin: "Εξασφαλίστε ολόκληρο BitShares πορτοφόλι μου με αυτόν τον κωδικό PIN",
pinFraudNote: "Σημείωση: Αν ένα λάθος PIN εισαχθεί 3 φορές, τότε BitShares πορτοφόλι θα κλείσει και δεν μπορεί να ξεκλειδωθεί για 15 λεπτά.",
backup: "Αντιγράφων ασφαλείας",
promprtForMonthlyBackup: "Ερώτηση για μηνιαία δημιουργία αντιγράφων ασφαλείας",
createEditSeed: "Δημιουργία ή επεξεργασία Master Seed σας (12 λέξη πορτοφόλι του εγκεφάλου)",
editSeed: "Επεξεργαστείτε Master Seed σας (12 λέξη πορτοφόλι του εγκεφάλου)",
coldStorageSpending: "Κρύο δαπάνες αποθήκευσης",
importPrivateKey: "Εισάγετε ένα ιδιωτικό κλειδί και τα κεφάλαια της από έναν κώδικα QR ή χαρτί πρόχειρο.",
qa: "Q & A",
q_sharePublicAddress: "Q: Πώς μπορώ να μοιραστώ μου BTS αναγγελιών με κάποιον;",
a_sharePublicAddress: "Α: Από την αρχική οθόνη, πατήστε στον κωδικό QR, ή πατήστε και κρατήστε πατημένο το BTS ... διεύθυνση.",
q_accessPrivateKeys: "Q: Πώς μπορώ να έχω πρόσβαση ιδιωτικών κλειδιών μου;",
a_accessPrivateKeys: "Α: Από την αρχική οθόνη, πατήστε και κρατήστε πατημένο το identicon λογαριασμό χρήστη που εμφανίζεται στα αριστερά του ονόματος λογαριασμού χρήστη.",
q_switchAccount : "Q: Πώς μπορώ να μεταβείτε σε διαφορετικό λογαριασμό στην αρχική οθόνη;",
a_switchAccount : "A: Κάντε κλικ στο μικρό μαύρο βέλος που εμφανίζεται στα δεξιά του ονόματος λογαριασμού χρήστη.",
q_searchTransaction: "Q: Πώς μπορώ να ψάξω για μια συγκεκριμένη συναλλαγή;",
a_searchTransaction: "A: Κάντε κλικ σε μια κεφαλίδα στήλης για να ταξινομήσετε από την εν λόγω στήλη (αύξουσα ή φθίνουσα). Ένα πεδίο αναζήτησης θα προστεθούν σύντομα.",
about: "Σχετικά με",
bitsharesMunichDonationRequest: "BitShares Munich φέρνει την τεχνολογία και τις υπηρεσίες Smartcoin για επενδυτές και επιχειρήσεις σε όλο τον κόσμο. Παρακαλούμε να εξετάσει την αιμοδοσία, για το έργο BitShares Πορτοφόλι έτσι το προγραμματιστές μπορούν να αντέξουν οικονομικά να κρατήσει αυτό το πορτοφόλι ασφαλές, χωρίς σφάλματα και βελτιώνεται συνεχώς. Ευχαριστώ!",

privacy: "Προστασία Προσωπικών Δεδομένων",
tcTitle: "Όροι και συνθήκες",
cancelAndExit: "Ακύρωση και Έξοδος",
iAgree: "Συμφωνώ",
confirmSendAmount: "Είστε σίγουροι ότι θέλετε να στείλετε nn ΧΧ",
confirmSendAmountRecipient: "να yy;",
continue: "Συνέχεια",
cancel: "Ακύρωση",

}, dialog: {
enterPin: "Εισάγετε το PIN",
incorrectPin: "Λανθασμένο PIN",
protectPinMessage: "Παρακαλούμε να προστατεύσει τον κωδικό PIN σας",
fraudAttemptMessage: "Απόπειρα απάτης ! ( για 3 συνεχόμενες εσφαλμένες PIN)",
},

exchange: {
    price: "Ισοτιμία",
    trade_currency: "εμπόριο Νόμισμα",
    trade : "ΕΜΠΌΡΙΟ",
    trade_msg: "Δεν έχετε περιουσιακό στοιχείο που θέλει έμπορο. Θέλετε να πάρετε ένα;"
    }



  }
};