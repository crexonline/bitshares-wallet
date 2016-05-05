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
balances: "BALANCES",
contacts: "CONTACTS",
finder: "FINDER",
exchange: "EXCHANGE",
receive: "RECEIVE",
send: "SEND",
balances: "Balances",
transactions: "Transactions",
date: "Date",
all: "All",
sent: "Sent",
recd: "Rec'd",
to: "To",
from: "From",
amount: "Amount",
asset: "Asset",
name: "Name",
account: "Account",
memo: "Memo",
donateToDevs: "Donate 2 BTS to the Support Developers at BitShares Munich",
hideDonations: "Hide Donations from homescreen Transactions list",
requestSpecificAmount: "Request a specific Amount (optional)",
sharePaymentRequest: "Share this Payment Request",
inviteFriend: "Invite a Friend",
buyLifetimeAnnual: "Buy a Lifetime or Annual Subscription",
continue: "Continue",
buy: "Buy",
sell: "Sell",
cancel: "Cancel",
back: "Back",
none: "None",
please_wait: "Please wait",
thank_you: "Thank you",
balance: "Balance",
publicKey: "Public Key",
privateKey: "Private Key",
yes: "Yes",
no: "No",
remaining_balance: "शेष राशि",
excess_amount: "नहीं बिलिंग राशि से अधिक राशि भेज सकते हैं",
backup_asset: "बैकअप एसेट",
reward_points : "इनाम के अंक"


}, settings: {
bitsharesWalletSettings: "BitShares Wallet Settings",
taxableCountry: "Taxable Country",
preferredLanguage: "Preferred Language",
displayDtAs: "Display Dates and Times as",
getPricesFrom: "Get prices from",
additionalSettings: "Additional Settings",
checkUpdatesStartup: "Check for updates on startup",
autoInstallMajorVer: "Automatically install major version releases",
requirePinToSend: "Require PIN to Send funds",
autoCloseWalletAfterInactivity: "Automatically close BitShares Wallet after 3 minutes of inactivity",
searchTransactions: "Search Transactions",
exportTransactionsTo: "Export Transactions to:",
alwaysDonateDevsMunich: "Always donate 2 BTS to the Support Developers at BitShares Munich (bitshares-munich)",
allowUse_GpsToFind: "Allow the Finder (v2.0) to use GPS to find nearest ATM’s, Humans and POS systems with Smartcoins",
allowReportPosition : "Allow the Finder (v2.0) to report your position so that others can buy or sell Smartcoins with you",
pinNumber: "PIN number",
createEditPin: "Create or Edit your 6-digit PIN to secure your funds and accounts",
editPin: "Edit your 6-digit PIN to secure your funds and accounts",
secureWithPin: "Secure my entire BitShares Wallet with this PIN",
pinFraudNote: "Note: If a wrong PIN is entered 3 times, then BitShares Wallet will close and cannot be unlocked for 15 minutes.",
backup: "Backup",
promprtForMonthlyBackup: "Prompt for monthly Backup",
createEditSeed: "Create or Edit your Master Seed (a 12 word brain wallet)",
editSeed: "Edit your Master Seed (a 12 word brain wallet)",
coldStorageSpending: "Cold Storage Spending",
importPrivateKey: "Import a Private Key and its funds from a paper QR code or Clipboard.",
qa: "Q&A",
q_sharePublicAddress: "Q: How do I share my BTS public address with someone?",
a_sharePublicAddress: "A: On the home screen, tap on the QR code, or tap and hold on the BTS… address.",
q_accessPrivateKeys: "Q: How do I access my private keys?",
a_accessPrivateKeys: "A: On the home screen, tap and hold on the user account identicon that appears to the left of the user account name.",
q_switchAccount : "Q: How do I switch to a different account on the home screen?",
a_switchAccount : "A: Click on the little black arrow that appears to the right of the user account name.",
q_searchTransaction: "Q: How do I search for a specific transaction?",
a_searchTransaction: "A: Click on a column header to sort by that column (ascending or descending). A search field will be added soon.",
about: "About",
bitsharesMunichDonationRequest: "BitShares Munich brings Smartcoin technology and services to Investors and Businesses worldwide. Please consider donating to the BitShares Wallet project so the Developers can afford to keep this wallet secure, bug free and constantly improving. Thank you!",

privacy: "Privacy",
tcTitle: "Terms & Conditions",
cancelAndExit: "Cancel and Exit",
iAgree: "I Agree",
confirmSendAmount: "Are you sure you want to send nn XX",
confirmSendAmountRecipient: "to yy?",
continue: "Continue",
cancel: "Cancel",

}, dialog: {
enterPin: "Enter PIN",
incorrectPin: "Incorrect PIN",
protectPinMessage: "Please Protect your PIN code",
fraudAttemptMessage: "Fraud Attempt! (on 3 consecutive incorrect PINs)",
},


unused: {
	import_backup: "Import Backup",
	restore_backup: "Restore Backup",
	create_backup_of: "Create Backup (%(name)s Wallet)",
	title: "Wallet",
	confirm: "Password (confirm)",
	password: "Password",
	change_wallet: "Change Wallet",
	
	import_bts1: "Import from BitShares 0.9.3c",
	setup_wallet: "Setup your wallet",
	delete_wallet: "Delete Wallet",
	delete_confirm_line1: "Are you ABSOLUTELY sure?",
	delete_confirm_line2: "Unexpected bad things will happen if you don’t read this!",
	delete_confirm_line3: "This action CANNOT be undone.",
	delete_wallet_name: "Delete Wallet (%(name)s)",
	balance_claims: "Balance Claims",
	create: "Create",
	console: "Wallet Management Console",
	create_backup: "Create Backup",
	backup_brainkey: "Backup Brainkey",
	import_keys: "Import Keys",
	import_keys_tool: "Key Import Tool",
	brainkey: "Brainkey",
	new_wallet: "New Wallet",
	active_wallet: "Active Wallet",
	verified: "Verified",
	verify_prior_backup: "Verify Prior Backup",
	brainkey_not_verified: "This Brainkey is not verified",
	cancel: "Cancel",
	done: "Done",
	invalid_format: "Invalid Format",
	downoad: "Download",
	new_wallet_name: "New Wallet Name",
	wallet_exist: "Wallet exists, choose a new name",
	wallet_exist_with_name: "Wallet (%(name)s) exists, please change the name",

	ready_to_restore: "Ready to Restore",
	restore_wallet_of: "Restore (%(name)s Wallet)",
	restore_success: "Successfully restored (%(name)s) wallet",
	change: "Change (%(name)s Wallet)",
	import_20_notice1: "Import your BTS 2.0+ BACKUP first",
	import_20_notice2: "(if you have one)",
	loading_balances: "Loading balance claims",
	no_balance: "No balance claims",
	claim_balance: "Claim Balance",
	claim_balances: "Claim Balances",
	balance_claim_lookup: "Lookup balances",
	unclaimed: "Unclaimed",
	unclaimed_vesting: "Unclaimed (vesting)",
	no_accounts: "No Accounts",
	brainkey_no_match: "Brainkey does not match, keep going",
	reenter_brainkey: "Re-Enter Brainkey",
	pwd4brainkey: "Enter password to show your brainkey",
	show_brainkey: "Show Brainkey",
	brainkey_w1: "WARNING: Print this out, or write it down.",
	brainkey_w2: "Anyone with access to your recovery key will",
	brainkey_w3: "have access to funds within this wallet.",
	custom_brainkey: "Custom Brainkey (advanced)",
	last_backup: "Last backup",
	never_backed_up: "This Wallet has never been backed up",
	need_backup: "This Wallet needs a backup",
	noneed_backup: "No backup is needed"
},

exchange: {
    price: "विनिमय दर",
    trade_currency: "व्यापार मुद्रा",
    trade : "व्यापार",
    trade_msg: "आप संपत्ति है जो व्यापारी चाहता है नहीं है। आप एक पाने के लिए करना चाहेंगे?"
},

trade_warn_msg:{
	select_backup_asset: "संपत्ति का बैकअप सेटिंग्स में चयनित नहीं है। पहले चयन करें",
	low_balance_backup_asset: "यदि आप व्यापार के लिए पर्याप्त संतुलन की जरूरत नहीं है। कृपया अन्य बैकअप परिसंपत्ति का चयन",
	other_backup_asset: "विनिमय दर उपलब्ध नहीं है। कृपया अन्य बैकअप परिसंपत्ति का चयन",
	cannot_pay: "आप भुगतान नहीं कर सकते। आप कम संतुलन है"
},


	} //wallet

};// json