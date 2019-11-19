module.exports = {
	"rules": {
		/*------------------------------------*\
		    #COLOR
		\*------------------------------------*/
		
		// Specify lowercase or uppercase for hex colors.
		'color-hex-case': 'lower',

		// Specify short or long notation for hex colors.
		// Hex colours must always use shorthand where possible.
		'color-hex-length': 'short',

		// Require (where possible) or disallow named colors.
		'color-named': 'never',

		// Disallow hex colors.
		// 'color-no-hex': false,

		// Disallow invalid hex colors.
		'color-no-invalid-hex': [ 
			true,
			{
				'severity': 'error'
			}
		],





		/*------------------------------------*\
		    #FONT-FAMILY
		\*------------------------------------*/
		// Specify whether or not quotation marks should be used around font family names.
		// "always-where-required"|"always-where-recommended"|"always-unless-keyword"
		'font-family-name-quotes': 'always-where-recommended',

		// # Font weight
		// Require consistent numeric or named font-weight values.
		'font-weight-notation': 'numeric',





		/*------------------------------------*\
		    #FUNCTION
		\*------------------------------------*/
		// Specify a blacklist of disallowed functions.
		// 'function-blacklist': false,
		// Disallow an unspaced operator within calc functions.
		'function-calc-no-unspaced-operator': true,

		// Require a newline or disallow whitespace after the commas of functions.
		// There must always be a newline after the commas in multi-line functions.
		'function-comma-newline-after': 'never-multi-line',

		// Require a newline or disallow whitespace before the commas of functions.
		// There must never be a whitespace before the commas in multi-line functions.
		'function-comma-newline-before': 'never-multi-line',

		// Require a single space or disallow whitespace after the commas of functions.
		// There must always be a single space after the commas in single-line functions
		'function-comma-space-after': 'always-single-line',

		// Require a single space or disallow whitespace before the commas of functions.
		// There must never be whitepace before the commas in single-line functions.
		'function-comma-space-before': 'never',

		// Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
		'function-linear-gradient-no-nonstandard-direction': [
			true,
			{
				'severity': 'error'
			}
		],

		// Limit the number of adjacent empty lines within functions.
		'function-max-empty-lines': 0,

		// Specify lowercase or uppercase for function names.
		'function-name-case': 'lower',

		// Require a newline or disallow whitespace on the inside of the parentheses of functions.
		// There must always be a newline if the function call is multiline.
		'function-parentheses-newline-inside': 'never-multi-line',

		// Require a single space or disallow whitespace on the inside of the parentheses of functions.
		// There must never be whitespace on the inside the parentheses.
		'function-parentheses-space-inside': 'never',

		// Require or disallow data URIs for urls.
		// 'function-url-data-uris': 'always',

		// Require or disallow quotes for urls.
		// always | never
		'function-url-quotes': 'always',

		// Specify a whitelist of only allowed functions.
		// 'function-whitelist': false,

		// Require a single space or disallow whitespace after functions.
		// There must always be a single space after the function.
		'function-whitespace-after': 'always',





		/*------------------------------------*\
		    #NUMBER
		\*------------------------------------*/
		// Require or disallow a leading zero for fractional numbers less than 1.
		// There must always be a leading zero.
		'number-leading-zero': 'always',

		// Limit the number of decimal places allowed in numbers.
		// There must be a maximum of 2 decimal places
		'number-max-precision': 2,

		// Disallow trailing zeros within numbers.
		// 'number-no-trailing-zeros': true,

		// Disallow units for zero lengths.
		// 'number-zero-length-no-unit': true,




		/*------------------------------------*\
		    #STRING
		\*------------------------------------*/
		// Disallow (unescaped) newlines in strings.
		'string-no-newline': true,

		// Specify single or double quotes around strings
		// Strings must always be wrapped with single quotes.
		'string-quotes': 'double',





		/*------------------------------------*\
		    #TIME
		\*------------------------------------*/
		// Disallow animation and transition times under 100ms.
		// 'time-no-imperceptible': true,





		/*------------------------------------*\
		    #UNIT
		\*------------------------------------*/
		// Specify a blacklist of disallowed units.
		'unit-blacklist': ['in', 'pt', 'pc', 'mm', 'cm', 'ch', 'ex'],

		// Specify lowercase or uppercase for units.
		'unit-case': [
			'lower',
			{
				'severity': 'error'
			}
		],

		// Specify a whitelist of allowed units.
		// 'unit-whitelist': false,

		// Disallow unknown units.
		'unit-no-unknown': true,





		/*------------------------------------*\
		    #VALUE
		\*------------------------------------*/
		// # Value
		// Disallow vendor prefixes for values.
		'value-no-vendor-prefix': true,

		// Specify lowercase or uppercase for keywords values.
		'value-keyword-case': 'lower',
		
		// Require a newline or disallow whitespace after the commas of value lists.
		// There must always be a newline after the commas in multi-line value lists.
		'value-list-comma-newline-after': 'never-multi-line',
		
		// Require a newline or disallow whitespace before the commas of value lists.
		// There must never be whitespace before the commas in multi-line value lists.
		'value-list-comma-newline-before': 'never-multi-line',
		
		// Require a single space or disallow whitespace after the commas of value lists.
		// There must always be a single space after the commas in single-line value lists.
		'value-list-comma-space-after': 'always',
		
		// Require a single space or disallow whitespace before the commas of value lists.
		// There must never be whitespace before the commas in single-line value lists.
		'value-list-comma-space-before': 'never',





		/*------------------------------------*\
		    #SHORTHAND
		\*------------------------------------*/
		// # Shorthand property
		// Disallow redundant values in shorthand properties.
		'shorthand-property-no-redundant-values': true,





		/*------------------------------------*\
		    #PROPERTY
		\*------------------------------------*/
		// Specify lowercase or uppercase for properties.
		'property-case': [
			'lower',
			{
				'severity': 'error'
			}
		],

		// Disallow vendor prefixes for properties.
		'property-no-vendor-prefix': true,

		// Disallow unknown properties.
		'property-no-unknown': [
			true,
			{
				'severity': 'error'
			}
		],





		/*------------------------------------*\
		    #DECLARATION
		\*------------------------------------*/
		// Require a single space or disallow whitespace after the bang of declarations.
		// There must never be whitespace after the bang.
		'declaration-bang-space-after': 'never',

		// Require a single space or disallow whitespace before the bang of declarations.
		// There must always be a single space before the bang.
		'declaration-bang-space-before': 'always',

		// Require a newline or disallow whitespace after the colon of declarations.
		// There must always be a newline after the colon if the declaration's value is multi-line.
		// 'declaration-colon-newline-after': 'always-multi-line',

		// Require a single space or disallow whitespace after the colon of declarations.
		// There must always be a single space after the colon if the declaration's value is single-line.
		'declaration-colon-space-after': 'always',

		// Require a single space or disallow whitespace before the colon of declarations.
		// There must never be whitespace before the colon
		'declaration-colon-space-before': 'never',

		// Disallow !important within declarations.
		'declaration-no-important': true,

		
		


		/*------------------------------------*\
		    #DECLARATION-BLOCK
		\*------------------------------------*/
		// Disallow duplicate properties within declaration blocks.
		'declaration-block-no-duplicate-properties': [
			true,
			{
				'severity': 'error'
			}
		],

		// Disallow shorthand properties that override related longhand properties within declaration blocks.
		'declaration-block-no-shorthand-property-overrides': true,

		// Require a newline or disallow whitespace after the semicolons of declaration blocks.
		// There must always be a newline after the semicolon.
		'declaration-block-semicolon-newline-after': 'always',

		// Require a newline or disallow whitespace before the semicolons of declaration blocks.
		// There must never be whitespace before the semicolons in multi-line rules.
		'declaration-block-semicolon-newline-before': 'never-multi-line',

		// Require a single space or disallow whitespace after the semicolons of declaration blocks.
		// There must always be a single space after the semicolon in single-line declaration blocks.
		'declaration-block-semicolon-space-after': 'always-single-line',

		// Require a single space or disallow whitespace before the semicolons of declaration blocks.
		// There must never be whitespace before the semicolons.
		'declaration-block-semicolon-space-before': 'never',

		// Limit the number of declaration within single line declaration blocks.
		'declaration-block-single-line-max-declarations': 1,

		// Require or disallow a trailing semicolon within declaration blocks.
		'declaration-block-trailing-semicolon': 'always',





		/*------------------------------------*\
		    #BLOCK
		\*------------------------------------*/
		// Require or disallow an empty line before the closing brace of blocks.
		'block-closing-brace-empty-line-before': 'never',

		// Require a newline or disallow whitespace after the closing brace of blocks.
		// There must always be a newline after the closing brace.
		'block-closing-brace-newline-after': 'always',

		// Require a newline or disallow whitespace before the closing brace of blocks.
		// There must always be a newline before the closing brace in multi-line blocks.
		'block-closing-brace-newline-before': 'always-multi-line',

		// Require a single space or disallow whitespace after the closing brace of blocks.
		// There must always be a single space after the closing brace in single-line blocks.
		'block-closing-brace-space-after': 'always-single-line',

		// Require a single space or disallow whitespace before the closing brace of blocks.
		// There must always be a single space before the closing brace in single-line blocks.
		'block-closing-brace-space-before': 'always-single-line',

		// Disallow empty blocks.
		'block-no-empty': [
			true,
			{
				'severity': 'error'
			}
		],

		// Require a newline after the opening brace of blocks.
		// There must always be a newline after the opening brace.
		'block-opening-brace-newline-after': 'always-multi-line',

		// Require a newline or disallow whitespace before the opening brace of blocks.
		// (this rule is totally bugged out and does not work properly)
		'block-opening-brace-newline-before': 'never-single-line',

		// Require a single space or disallow whitespace after the opening brace of blocks.
		// There must always be a single space after the opening brace in single-line blocks.
		'block-opening-brace-space-after': 'always-single-line',

		// Require a single space or disallow whitespace before the opening brace of blocks.
		// There must always be a single space before the opening brace.
		'block-opening-brace-space-before': 'always',





		/*------------------------------------*\
		    #SELECTOR
		\*------------------------------------*/
		// Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
		'selector-attribute-brackets-space-inside': 'never',

		// Specify a blacklist of disallowed attribute operators.
		// 'selector-attribute-operator-blacklist': false,

		// Specify a whitelist of allowed attribute operators.
		// 'selector-attribute-operator-whitelist': false,

		// Require a single space or disallow whitespace after operators within attribute selectors.
		'selector-attribute-operator-space-after': 'never',

		// Require a single space or disallow whitespace before operators within attribute selectors.
		'selector-attribute-operator-space-before': 'never',

		// Require or disallow quotes for attribute values.
		'selector-attribute-quotes': 'always',

		// Specify a pattern for class selectors.
		'selector-class-pattern': /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/,

		// Require a single space or disallow whitespace after the combinators of selectors.
		// There must always be a single space after the combinators.
		'selector-combinator-space-after': 'always',

		// Require a single space or disallow whitespace before the combinators of selectors.
		// There must always be a single space before the combinators.
		'selector-combinator-space-before': 'always',

		// Specify a pattern for id selectors.
		// 'selector-id-pattern': false,
		// Limit the specificity of selectors.
		'selector-max-specificity': '0,3,0',

		// Disallow attribute selectors.
		// 'selector-no-attribute': false,

		// Disallow combinators in selectors.
		// 'selector-no-combinator': false,

		// Disallow qualifying a selector by type.
		'selector-no-qualifying-type': [ 
			true, 
			{ 
				ignore: [ 'attribute' ] 
			} 
		],

		// Disallow vendor prefixes for selectors.
		'selector-no-vendor-prefix': true,

		// Specify lowercase or uppercase for pseudo-class selectors.
		'selector-pseudo-class-case': 'lower',

		// Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
		'selector-pseudo-class-parentheses-space-inside': 'never',

		// Specify lowercase or uppercase for pseudo-element selectors.
		'selector-pseudo-element-case': 'lower',

		// Specify single or double colon notation for applicable pseudo-elements.
		// Applicable pseudo-elements must always use the double colon notation.
		'selector-pseudo-element-colon-notation': 'double',

		// Specify lowercase or uppercase for type selector.
		'selector-type-case': 'lower',

		



		/*------------------------------------*\
		    #SELECTOR-LIST
		\*------------------------------------*/
		// Require a newline or disallow whitespace after the commas of selector lists.
		// There must always be a newline after the commas in multi-line selector lists.
		'selector-list-comma-newline-after': 'always-multi-line',

		// Require a newline or disallow whitespace before the commas of selector lists.
		// There must never be whitespace before the commas in multi-line selector lists.
		'selector-list-comma-newline-before': 'never-multi-line',

		// Require a single space or disallow whitespace after the commas of selector lists.
		// There must always be a single space after the commas in single-line selector lists.
		'selector-list-comma-space-after': 'always-single-line',

		// Require a single space or disallow whitespace before the commas of selector lists.
		// There must never be whitespace before the commas.
		'selector-list-comma-space-before': 'never',





		/*------------------------------------*\
		    #RULE
		\*------------------------------------*/
		'rule-empty-line-before': [
			'always',
			{
				'except': [ 'first-nested' ],
				'ignore': [ 'after-comment' ]
			}
		],





		/*------------------------------------*\
		    #MEDIA-FEATURE
		\*------------------------------------*/
		// Require a single space or disallow whitespace after the colon in media features.
		// There must always be a single space after the colon.
		'media-feature-colon-space-after': 'always',

		// Require a single space or disallow whitespace before the colon in media features.
		// There must never be whitespace before the colon.
		'media-feature-colon-space-before': 'never',

		// Specify lowercase or uppercase for media feature names.
		'media-feature-name-case': 'lower',

		// Require a single space or disallow whitespace on the inside of the parentheses within media features.
		'media-feature-parentheses-space-inside': null,

		// Disallow vendor prefixes for media feature names.
		'media-feature-name-no-vendor-prefix': null,





		/*------------------------------------*\
		    #MEDIA-QUERY-LIST
		\*------------------------------------*/
		// Require a newline or disallow whitespace after the commas of media query lists.
		// There must always be a newline after the commas in multi-line media query lists.
		'media-query-list-comma-newline-after': 'never-multi-line',

		// Require a newline or disallow whitespace before the commas of media query lists.
		// There must never be a white before the commas in multi-line media query lists.
		'media-query-list-comma-newline-before': 'never-multi-line',

		// Require a single space or disallow whitespace after the commas of media query lists.
		// There must always be a single space after the commas in single-line media query lists.
		'media-query-list-comma-space-after': 'always-single-line',

		// Require a single space or disallow whitespace before the commas of media query lists.
		// There must never be whitepace before the commas.
		'media-query-list-comma-space-before': 'never',





		/*------------------------------------*\
		    #AT-RULE
		\*------------------------------------*/
		// Require or disallow an empty line before @rules.
		// There must always be an empty line before @rules.
		// 'at-rule-empty-line-before': [
		// 	'always', 
		// 	{ 
		// 		'except': [
		// 			'blockless-group',
		// 		],
		// 		'ignore': [
		// 			'after-comment',
		// 			'inside-block'
		// 		]
		// 	}
		// ],

		// Specify lowercase or uppercase for at-rules names.
		'at-rule-name-case': 'lower',

		// Disallow vendor prefixes for @rules.
		'at-rule-no-vendor-prefix': null,

		// Require a single space after at-rule names.
		'at-rule-name-space-after': 'always',

		// Require a newline after the semicolon of at-rules.
		'at-rule-semicolon-newline-after': 'always',

		// Require a single space or disallow whitespace before the semicolons at-rules.
		'at-rule-semicolon-space-before': 'never',
	}
}
