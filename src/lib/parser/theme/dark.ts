import { createTheme } from 'thememirror';
import { tags } from '@lezer/highlight';

export const darkTheme = createTheme({
	variant: 'dark',
	settings: {
		background: '#1e1e1e',
		foreground: '#d4d4d4',
		caret: '#d4d4d4',
		selection: '#5A7590',
		lineHighlight: '#3c3c41',
		gutterBackground: '#282828',
		gutterForeground: '#858585'
	},
	styles: [
		{
			tag: tags.comment,
			color: '#6c9e57'
		},
		{
			tag: tags.variableName,
			color: '#9cdcfe'
		},
		{
			tag: [tags.string, tags.special(tags.brace)],
			color: '#ce9178'
		},
		{
			tag: tags.number,
			color: '#B6CFA9'
		},
		{
			tag: tags.bool,
			color: '#4fc4ff'
		},
		{
			tag: tags.null,
			color: '#4fc4ff'
		},
		{
			tag: tags.unit,
			color: '#608FC2'
		},
		{
			tag: tags.keyword,
			color: '#d18dcc'
		},
		{
			tag: tags.operator,
			color: '#d4d4d4'
		},
		{
			tag: tags.className,
			color: '#4dcab1'
		},
		{
			tag: tags.definition(tags.typeName),
			color: '#4fcfb5'
		},
		{
			tag: tags.angleBracket,
			color: '#F9D849'
		},
		{
			tag: tags.brace,
			color: '#F9D849'
		},
		{
			tag: tags.bracket,
			color: '#F9D849'
		},
		{
			tag: tags.squareBracket,
			color: '#F9D849'
		},
		{
			tag: tags.paren,
			color: '#F9D849'
		},
		{
			tag: tags.punctuation,
			color: '#d4d4d4'
		},
		{
			tag: tags.separator,
			color: '#d4d4d4'
		},
		{
			tag: tags.typeName,
			color: '#4ecdb4'
		},
		{
			tag: tags.tagName,
			color: '#59a3df'
		},
		{
			tag: tags.attributeName,
			color: '#a0e1ff'
		}
	]
});
