
// The following languages are excluded because they have no page or nothing is on their page: chichewa, hmong, shona, sundanese

const languages = ['Afrikaans', 'Albanian_language', 'Amharic', 'Arabic',
'Armenia', 'Azerbaijani_language', 'Basque_language', 'Belarusian_language', 'Bengali_language',
'Bosnian_language', 'Bulgarian_language', 'Catalan_language', 'Cebuano_language', 'Chinese_language',
 'Corsican_language', 'Croatian_language', 'Czech_language', 'Danish_language', 'Dutch_language',
'English_language', 'Esperanto', 'Estonian_language', 'Filipino_language', 'Finnish_language',
'French_language', 'Galician_language', 'Georgian_language', 'German_language',
 'Greek_language', 'Gujarati_language', 'Haitian_Creole', 'North_Frisian_language',
'Hausa_language', 'Hawaiian_language', 'Hebrew_language', 'Hindi', 'Hungarian_language'
,'Icelandic_language', 'Igbo_language', 'Indonesian_language', 'Irish_language', 'Italian_language',
'Japanese_language', 'Javanese_language', 'Kannada', 'Kazakh_language', 'Khmer_language',
'Korean_language', 'Kurdish_language', 'Kyrgyz_language', 'Lao_language', 'Latvian_language',
'Lithuanian_language', 'Luxembourgish_language', 'Macedonian_language', 'Malagasy_language',
'Malay_language', 'Malayalam', 'Maltese_language', 'Maori_language', 'Marathi_language', 'Mongolian_language',
'Burmese_language', 'Nepali_language', 'Norwegian_language', 'Odia_language', 'Pashto_language',
'Persian_language', 'Polish_language', 'Portuguese_language', 'Punjabi_language', 'Romanian_language',
'Russian_language', 'Samoan_language', 'Scottish_Gaelic_language', 'Serbian_language', 'Southern_Sotho',
'Sindhi_language', 'Sinhala_language', 'Slovak_language', 'Slovene_language', 'Somali_language',
'Spanish_language', 'Swahili_language', 'Swedish_language', 'Tajik_language','Tamil_language',
'Telugu', 'Thai_language', 'Turkish_language', 'Ukrainian_language', 'Urdu', 'Uyghur_language', 'Uzbek_language',
'Vietnamese_language', 'Welsh_language', 'Xhosa_language', 'Yoruba_language', 'Zulu_language']


module.exports = {checkLanguage: function(language) {
    return languages.includes(language)
}}

