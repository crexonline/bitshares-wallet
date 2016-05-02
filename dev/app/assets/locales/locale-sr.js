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
balances: "ВАГЕ",
contacts: "КОНТАКТИ",
finder: "FINDER",
exchange: "РАЗМЕНА",
receive: "РЕЦЕИВЕ",
send: "СЕНД",
balances: "Ваге",
transactions: "Трансакције",
date: "датум",
all: "сви",
sent: "Сент",
recd: "Рец'д",
to: "Да",
from: "Од",
amount: "количина",
asset: "Имовине",
name: "назив",
account: "Рачун",
memo: "меморандум",
donateToDevs: "Донирајте 2 BTS подршци Девелоперс на BitShares Munich",
hideDonations: "Хиде донације из листе ХомеСцреен Трансацтионс",
requestSpecificAmount: "Захтев за одређени износ (опционо)",
sharePaymentRequest: "Схаре тхис плаћања захтев",
inviteFriend: "Позовите пријатеља",
buyLifetimeAnnual: "Купите Лифетиме или годишњу претплату",
continue: "Наставак",
buy: "купити",
sell: "продати",
cancel: "отказати",
back: "натраг",
none: "Нема",
please_wait: "Сачекајте",
thank_you: "Хвала вам",
balance: "Вага",
publicKey: "Јавни кључ",
privateKey: "приватног кључа",
yes: "јесте",
no: "Ne",
remaining_balance: "Преостали износ",
excess_amount: "Не могу послати износ више од износа за наплату",
backup_asset: "бацкуп имовине",
reward_points : "Наградни поени"

}, settings: {
bitsharesWalletSettings: "БитСхарес новчаника Подешавања",
taxableCountry: "Опорезива Земља",
preferredLanguage: "Језик којем дајете предност",
displayDtAs: "Дисплаи датума и времена као",
getPricesFrom: "Гет цене са",
additionalSettings: "Додатне поставке",
checkUpdatesStartup: "Цхецк фор упдатес на старту",
autoInstallMajorVer: "Аутоматско инсталирање главне верзије издања",
requirePinToSend: "Захтева ПИН то Сенд средства",
autoCloseWalletAfterInactivity: "Аутоматски затвори БитСхарес новчаник након 3 минута неактивности",
searchTransactions: "Сеарцх Трансакције",
exportTransactionsTo: "Извоз трансакције на :",
alwaysDonateDevsMunich: "Увек донирати 2 BTS подршци Девелоперс на BitShares Munich (bitshares-munich)",
allowUse_GpsToFind: "Дозволите Финдер (в2.0) да користи ГПС да пронађете најближег банкомата, људи и ПОС системе са Смартцоинс",
allowReportPosition : "Дозволите Финдер (в2.0) да пријаве своју позицију тако да и други могу купити или продати Смартцоинс са вама",
pinNumber: "Pin broj",
createEditPin: "Направите или измените 6 цифара ПИН да обезбеди своје злато и рачуне",
editPin: "Уредите ваше 6 цифара ПИН да обезбеди своје злато и рачуне",
secureWithPin: "Сецуре целу моју БитСхарес Новчаник са овим ПИН",
pinFraudNote: "Напомена: Ако погрешан ПИН ушла 3 пута, а затим БитСхарес Новчаник ће се затворити и не може се откључати за 15 минута.",
backup: "Резерва",
promprtForMonthlyBackup: "Упитај за месечну Бацкуп",
createEditSeed: "Направите или измените Мастер Сеед (од 12 речи мозак новчаник)",
editSeed: "Уредите свој Мастер Сеед (од 12 речи мозак новчаник)",
coldStorageSpending: "Цолд Стораге Потрошња",
importPrivateKey: "Увоз приватни кључ и своја средства из папира КР кода или оставу.",
qa: "К & А",
q_sharePublicAddress: "П: Како да делим БТС јавну адресу са неким?",
a_sharePublicAddress: "О: На почетном екрану, додирните на КР коду, или додирните и држите на БТС ... адресу.",
q_accessPrivateKeys: "П: Како да приступим мојим приватне кључеве?",
a_accessPrivateKeys: "О: На почетном екрану, додирните и држите на корисничком налогу Идентицон која се појављује са леве стране имена кориснички рачун.",
q_switchAccount : "П: Како да се пребаците на други налог на почетном екрану?",
a_switchAccount : "О: Кликните на стрелицу малом црном који се појављује на десно од назива кориснички рачун.",
q_searchTransaction: "П: Како да тражи одређену трансакцију?",
a_searchTransaction: "О: Кликните на заглавље колоне да бисте сортирали по тој колони (узлазном или силазном). Поље претрага ће бити додато ускоро.",
about: "O tome",
bitsharesMunichDonationRequest: "БитСхарес Минхен доноси Смартцоин технологију и услуге за инвеститоре и предузећа широм света. Молимо Вас да размотрите донирати пројекту БитСхарес Новчаник тако да програмери могу приуштити да задржи овај новчаник безбедан, буг слободни и стално побољшава. Хвала вам!",

privacy: "Политика",
tcTitle: "Услови коришћења",
cancelAndExit: "Цанцел и Екит",
iAgree: "Слажем се",
confirmSendAmount: "Да ли сте сигурни да желите да пошаљете нн КСКС",
confirmSendAmountRecipient: "да ИИ?",
continue: "Наставак",
cancel: "отказати",

}, dialog: {
enterPin: "Унесите ПИН",
incorrectPin: "Нетачан ПИН",
protectPinMessage: "Молимо Вас да Заштитите свој ПИН код",
fraudAttemptMessage: "Покушај преваре ! ( на 3 узастопна погрешна ПИН )",
},

exchange: {
    price: "Курс",
    trade_currency: "трговина Валута",
    trade : "ТРГОВИНА",
    trade_msg: "Немате средства која трговац жели. Да ли желите да се један?"
    }



  }
};