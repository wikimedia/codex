/** @typedef {import('vue-docgen-api').ParamTag} ParamTag */
/** @typedef {import('vue-docgen-cli').Templates[ 'component' ]} Component */

/** @type Component */
const componentTemplate = function ( renderedUsage, doc, config, componentRelativePath ) {
	const { displayName, docsBlocks, tags } = doc;
	const { author, since, version } = /** @type {Record<string, ParamTag[]>} */ ( tags ?? {} );

	// Limit on-page navigation to headings level 2 and 3.
	const componentName = displayName.slice( 3 );
	const frontMatter = [ `title: ${ componentName }`, 'outline: [ 2, 3 ]' ];

	// Include a warning if the component is still in development
	const devWarning = componentRelativePath.includes( 'components-wip/' ) ?
		`
::: warning
This component is still under development. It is not yet available in releases of Codex.
:::
		` : '';

	// If there's content after the Vue usage section, split it out so we can tack it back on after
	// the usage tables.
	const cssOnlyHeading = '### CSS-only version';
	const keyboardNavHeading = '### Keyboard navigation';

	let vueDocs = '';
	let cssOnlyDocs = '';
	let keyboardNavDocs = '';

	if ( docsBlocks && docsBlocks.length > 0 ) {
		if ( docsBlocks[ 0 ].includes( cssOnlyHeading ) ) {
			// Split docs at the CSS-only heading. This will include the keyboard nav section too.
			const splitDocs = docsBlocks[ 0 ].split( cssOnlyHeading );
			vueDocs = splitDocs[ 0 ];
			cssOnlyDocs = cssOnlyHeading + splitDocs[ 1 ];
		} else if ( docsBlocks[ 0 ].includes( keyboardNavHeading ) ) {
			// Otherwise, split at the keyboard nav heading.
			const splitDocs = docsBlocks[ 0 ].split( keyboardNavHeading );
			vueDocs = splitDocs[ 0 ];
			keyboardNavDocs = keyboardNavHeading + splitDocs[ 1 ];
		}
	}

	return `
---
# This file is automatically generated; do not edit it directly.
# Edit component demos in packages/codex-docs/component-demos.
${ frontMatter.join( '\n' ) }
---

# ${ componentName }

${ devWarning }

${ author ? author.map( ( a ) => `**Author**: ${ a.description }` ).join( '\n' ) : '' }
${ since ? `**Since** ${ since[ 0 ].description }` : '' }
${ version ? `**Version** ${ version[ 0 ].description }` : '' }

${ vueDocs || ( docsBlocks ? docsBlocks.join( '\n---\n' ) : '' ) }

${ renderedUsage.props.replace( '## Props', '#### Props' ) }
${ renderedUsage.methods.replace( '## Methods', '#### Methods' ) }
${ renderedUsage.events.replace( '## Events', '#### Events' ) }
${ renderedUsage.slots.replace( '## Slots', '#### Slots' ) }

${ cssOnlyDocs || '' }
${ keyboardNavDocs || '' }

`;
};

export default componentTemplate;
