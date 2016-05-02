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
balances: "BAKİYELER",
contacts: "KİŞİLER",
finder: "BULUCU",
exchange: "BORSA",
receive: "AL",
send: "GÖNDER",
balances: "Bakiyeler",
transactions: "İşlemler",
date: "Tarih",
all: "Tümü",
sent: "Gönderildi",
recd: "Alındı",
to: "Alıcı",
from: "Gönderen",
amount: "Miktar",
asset: "Aktif",
name: "Ad",
account: "Hesap",
memo: "Memo",
donateToDevs: "BitShares Munich Geliştiricilerini Desteklemek için 2 BTS Bağışla",
hideDonations: "Bağışları Gizle",
requestSpecificAmount: "Belli bir miktar talep et (opsiyonel)",
sharePaymentRequest: "Bu Ödeme Talebini Paylaş",
inviteFriend: "Arkadaşını Davet Et",
buyLifetimeAnnual: "Ömür-boyu yada Yıllık Üyelik Satınal",
continue: "İleri",
buy: "Al",
sell: "Sat",
cancel: "İptal",
back: "Geri",
none: "Hiçbiri",
please_wait: "Lütfen Bekle",
thank_you: "Teşekkürler",
balance: "Bakiye",
publicKey: "Açık Anahtar",
privateKey: "Özel Anahtar",
yes: "Evet",
no: "Hayır",
remaining_balance: "bakiye",
excess_amount: "Fatura miktardan fazla miktarda gönderilemiyor",
backup_asset: "yedekleme Varlık",
reward_points : "Ödül Puanları"

}, settings: {
bitsharesWalletSettings: "BitShares Cüzdan Ayarları",
taxableCountry: "Vergiye Tabi Ülke",
preferredLanguage: "Lisan",
displayDtAs: "Tarih ve Saat Düzeni",
getPricesFrom: "Fiyat Kaynağı",
additionalSettings: "İlave Ayarlar",
checkUpdatesStartup: "Açılışta Güncellemeleri Denetle",
autoInstallMajorVer: "Yeni Sürümleri Otomatik Olarak Kur",
requirePinToSend: "Fon Gönderebilmek İçin PIN Talep Et",
autoCloseWalletAfterInactivity: "Kullanılmayan Cüzdanı 3 Dakika Sonra Otomatik Kapat",
searchTransactions: "İşlem Ara",
exportTransactionsTo: "İşlemleri Şuraya Aktar :",
alwaysDonateDevsMunich: "BitShares Munich (bitshares-munich) Geliştiricilerini Desteklemek İçin Her Sefer 2 BTS Bağışla",
allowUse_GpsToFind: "Bulucu'ya (v2.0) AkıllıPara Kullanan POS Sitstemlerini, Kişileri ve En Yakın ATM'leri Bulmak İçin İzin Ver",
allowReportPosition : "Bulucu'nun (v2.0) Başkalarıyla AkıllıPara Alışverişi Yapmak için Konumunuzu Paylaşmasına İzin Ver",
pinNumber: "PIN Kodu",
createEditPin: "Fonlarınızın ve Hesaplarınızın Güvenliği İçin 6-Haneli PIN Kodu Yaratın veya Düzenleyin",
editPin: "Fonlarınızın ve Hesaplarınızın Güvenliği İçin 6-Haneli PIN Kodunuzu Düzenleyin",
secureWithPin: "Bu PIN Kodunu Tüm BitShares Cüzdanım İçin Kullan",
pinFraudNote: "Not: 3 Defa Yanlış PIN Kodu Girildiğinizde Cüzdan 15 Dakika Kitlenir",
backup: "Yedekle",
promprtForMonthlyBackup: "Aylık Yedekleme İçin Uyar",
createEditSeed: "Master Seed (12 Kelimelik Beyin Cüzdanı) Oluştur veya Düzenle",
editSeed: "Master Seed (12 Kelimelik Beyin Cüzdanı)nızı Düzenleyin",
coldStorageSpending: "Soğuk Muhafaza Harcama",
importPrivateKey: "Kağıt QR / Panodan İçeri Özel Anahtar ve Fon Aktar",
qa: "Sıkça Sorulan Sorular",
q_sharePublicAddress: "S: Açık adresimi başkalarıyla nasıl paylaşabilirim ?",
a_sharePublicAddress: "C: Ana ekranda, QR kodu üzerine dokunun veya BTS ... adresine basılı tutun.",
q_accessPrivateKeys: "S: Özel anahtarlarıma nasıl erişebilirim ?",
a_accessPrivateKeys: "C: Ana ekranda, solda görünen kullanıcı simgesini basılı tutun.",
q_switchAccount : "S: Ana ekranda nasıl başka bir hesaba geçiş yapabilirim ?",
a_switchAccount : "C: Sağda görünen siyah ok işaretini tıklayın.",
q_searchTransaction: "S: Belli bir işlemi nasıl bulurum?",
a_searchTransaction: "C: Kolon başlığına dokunarak sıralamayı düzenleyebilirsiniz. Arama özelliği yakında ilave edilecek.",
about: "Hakkında",
bitsharesMunichDonationRequest: "BitShares Munich dünya çapında Yatırımcı ve Kuruluşlara AkıllıCoin teknoljisi ve hizmetler sunuyor. Liütfen BitShares Cüzdanı Projesine bağış yaparak bu cüzdanın kusursuz, emniyetli ve devamlı gelişmesine yardımcı olun. Teşekkürler",

privacy: "Gizlilik",
tcTitle: "Şartlar ve Koşullar",
cancelAndExit: "İptal Et ve Çık",
iAgree: "Kabul Ediyorum",
confirmSendAmount: "nn XX göndermek istediğinizden emin misiniz ?",
confirmSendAmountRecipient: "yy için ?",
continue: "İleri",
cancel: "İptal",

}, dialog: {
enterPin: "PIN Kodunu Girin",
incorrectPin: "Yanlış PIN",
protectPinMessage: "Lütfen PIN Kodunuzu Koruyun",
fraudAttemptMessage: "Dolandırıcılık Girişimi ! ( 3 üst üste yanlış PIN)",
},

exchange: {
    price: "Döviz kuru",
    trade_currency: "Ticaret Döviz",
    trade : "TİCARET",
    trade_msg: "Sen tüccar istediği varlık yoktur. birini almak ister misiniz?"
    }


  }
};