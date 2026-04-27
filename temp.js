





























































            // Questions: adapted from questionnaire-prototype.html (CSV-backed logic)
            const questions = {
                // Key Planning Considerations
                'LG1': {
                    category: 'Key Planning Considerations',
                    group: 'location',
                    icon: '🏙️',
                    question: 'Is your property a listed building, officially recognised for its special architectural or historic interest?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Your project will need special consent and cannot rely on standard permitted development rights.' },
                        { text: 'No', value: 'no', next: ['LG2'] }
                    ],
                    guidance: 'Permitted Development rights do not apply to listed buildings. Any works will require Listed Building Consent and possibly planning permission, regardless of scale or type.'
                },
                'LG2': {
                    category: 'Key Planning Considerations',
                    group: 'location',
                    icon: '🌳',
                    question: 'Is your property located in a conservation area, which is a special area recognised for its character or history?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Some works may need full planning permission, and additional checks may apply.' },
                        { text: 'No', value: 'no', next: ['LG3'] }
                    ],
                    guidance: 'Permitted Development rights are more limited in conservation areas. Some works may still be allowed, but additional restrictions apply. A Lawful Development Certificate can confirm whether PD applies.'
                },
                'LG3': {
                    category: 'Key Planning Considerations',
                    group: 'location',
                    icon: '📌',
                    question: 'Has your property been specifically restricted by your local council so that some standard planning rights no longer apply? (Article 4)',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Some types of work that are normally allowed will require planning permission.' },
                        { text: 'No', value: 'no', next: ['LG4'] }
                    ],
                    guidance: 'An Article 4 Direction removes specific Permitted Development rights. Even minor works may need planning permission. Check the scope of the direction or confirm via a Lawful Development Certificate (LDC).'
                },
                'LG4': {
                    category: 'Key Planning Considerations',
                    group: 'location',
                    icon: '🌍',
                    question: 'Is your property located within a protected area, such as a National Park, Area of Outstanding Natural Beauty, or World Heritage Site?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Extra limits apply and some work may require full planning permission.' },
                        { text: 'No', value: 'no', next: ['PG1'] }
                    ],
                    guidance: 'Permitted Development rights are more restricted on designated land. Some development may still be possible, but tighter limits apply and planning permission is more likely. A Lawful Development Certificate (LDC) can help confirm.'
                },
                // About Your Project (Project Gateway)
                'PG1': {
                    category: 'About Your Project',
                    group: 'project',
                    question: 'Are you planning to build a completely new house on this site?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Full planning permission likely required.' },
                        { text: 'No', value: 'no', next: ['PG2'] }
                    ],
                    guidance: 'Permitted Development rights do not apply to new dwellings. Full planning permission will be required.'
                },
                'PG2': {
                    category: 'About Your Project',
                    group: 'project',
                    question: 'Are you planning to replace an existing house with a new one?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required if footprint/layout changes.' },
                        { text: 'No', value: 'no', next: ['PG3'] }
                    ],
                    guidance: 'Permitted Development rights do not apply if footprint or layout changes. Planning permission required.'
                },
                'PG3': {
                    category: 'About Your Project',
                    group: 'project',
                    question: 'Will you be adding extensions or additional buildings to the existing property?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PG4'] },
                        { text: 'No', value: 'no', next: ['PG4'] }
                    ],
                    guidance: 'Permitted Development may apply, some checks needed.'
                },
                'PG4': {
                    category: 'About Your Project',
                    group: 'project',
                    question: 'Will you be converting the property or changing its use (e.g., residential to commercial or flats)?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PG5'] },
                        { text: 'No', value: 'no', next: ['PG5'] }
                    ],
                    guidance: 'Planning permission may be needed, check PD rules.'
                },
                'PG5': {
                    category: 'About Your Project',
                    group: 'project',
                    question: 'Will your project involve demolishing an existing building or carrying out site works like fences, walls, gates, or driveways?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T1'] },
                        { text: 'No', value: 'no', next: ['T1'] }
                    ],
                    guidance: 'Planning permission may be required; check building control.'
                },
                // Extensions & Additions
                'PT1': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning a loft extension?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS1-01'] },
                        { text: 'No', value: 'no', next: ['PT2'], continueFlow: true }
                    ],
                    guidance: 'Permitted Development may apply; building control needed.'
                },
                'PT2': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning a single-storey extension?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS2-01'] },
                        { text: 'No', value: 'no', next: ['PT3'], continueFlow: true }
                    ],
                    guidance: 'Permitted Development may apply; building control needed.'
                },
                'PT3': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning a multi-storey extension?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required; building control needed.' },
                        { text: 'No', value: 'no', next: ['PT4'], continueFlow: true }
                    ],
                    guidance: 'Multi-storey extensions usually cannot be done under permitted development. You will need full planning permission, and Building Control approval is required to ensure the structure is safe. Professional advice is strongly recommended before starting.'
                },
                'PT4': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning a conservatory or sunroom?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS4-01'] },
                        { text: 'No', value: 'no', next: ['PT5'], continueFlow: true }
                    ],
                    guidance: 'Conservatories are treated as single-storey extensions; Permitted Development may apply; building control needed.'
                },
                'PT5': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning a new garage or converting an existing garage?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS5-01'] },
                        { text: 'No', value: 'no', next: ['PT6'], continueFlow: true }
                    ],
                    guidance: 'Permitted Development may apply; building control required if habitable.'
                },
                'PT6': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning any external building like a workshop, garden office, or pool building?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS6-01'] },
                        { text: 'No', value: 'no', next: ['PT7'], continueFlow: true }
                    ],
                    guidance: 'Permitted Development may apply; building control required if serviced or habitable.'
                },
                'PT7': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning to add a balcony?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission and building control required.' },
                        { text: 'No', value: 'no', next: ['PT8'], continueFlow: true }
                    ],
                    guidance: 'Adding a balcony is generally not allowed under permitted development and requires planning permission and Building Control approval.'
                },
                'PT8': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning to add a porch?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS8-01'] },
                        { text: 'No', value: 'no', next: ['PT9'], continueFlow: true }
                    ],
                    guidance: 'A small porch may be permitted development; building control usually required.'
                },
                'PT9': {
                    category: 'Extensions & Additions',
                    group: 'detail',
                    question: 'Are you planning an annex or granny flat?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS9-01'] },
                        { text: 'No', value: 'no', next: ['T1'], continueFlow: true }
                    ],
                    guidance: 'Permitted Development may apply if ancillary; building control required.'
                },
                // Conversions & Change of Use
                'PT10': {
                    category: 'Conversions & Change of Use',
                    group: 'detail',
                    question: 'Are you converting a single dwelling into flats or bedsits?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission and Building Control required.' },
                        { text: 'No', value: 'no', next: ['PT11'], continueFlow: true }
                    ],
                    guidance: 'Planning permission is required. You cannot use permitted rights. Building Control approval is also required before starting work.'
                },
                'PT11': {
                    category: 'Conversions & Change of Use',
                    group: 'detail',
                    question: 'Are you converting flats into a single dwelling?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS11-01'] },
                        { text: 'No', value: 'no', next: ['PT12'], continueFlow: true }
                    ],
                    guidance: 'Converting flats into a single dwelling may be allowed as permitted development; Building Control still required.'
                },
                'PT12': {
                    category: 'Conversions & Change of Use',
                    group: 'detail',
                    question: 'Are you converting a single dwelling into a House in Multiple Occupation (HMO)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required; check local housing and safety rules.' },
                        { text: 'No', value: 'no', next: ['PT13'], continueFlow: true }
                    ],
                    guidance: 'Planning permission is required and local rules on licensing and fire safety may apply.'
                },
                'PT13': {
                    category: 'Conversions & Change of Use',
                    group: 'detail',
                    question: 'Are you converting a commercial building into residential?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T1'] },
                        { text: 'No', value: 'no', next: ['PT14'], continueFlow: true }
                    ],
                    guidance: 'You may be able to convert this property under Permitted Development rights. Submit a prior approval application to your council — this checks whether specific impacts are acceptable. You can also request a Lawful Development Certificate, which confirms the conversion is allowed. Building Control approval may also be required. Professional advice is recommended.'
                },
                'PT14': {
                    category: 'Conversions & Change of Use',
                    group: 'detail',
                    question: 'Are you converting space above shops into residential?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T1'] },
                        { text: 'No', value: 'no', next: ['PT15'], continueFlow: true }
                    ],
                    guidance: 'You may be able to convert the space above a shop under Permitted Development rights. Submit a prior approval application to your council to confirm the conversion is acceptable. You can also request a Lawful Development Certificate confirming the conversion is allowed. Building Control approval may also be required. Professional advice is recommended.'
                },
                'PT15': {
                    category: 'Conversions & Change of Use',
                    group: 'detail',
                    question: 'Are you converting a residential building into commercial use?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission and Building Control required.' },
                        { text: 'No', value: 'no', next: ['PT16'], continueFlow: true }
                    ],
                    guidance: 'Residential to commercial change generally requires planning permission.'
                },
                'PT16': {
                    category: 'Conversions & Change of Use',
                    group: 'detail',
                    question: 'Are you making a general change of use to the property?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T1'] },
                        { text: 'No', value: 'no', next: ['PT17'], continueFlow: true }
                    ],
                    guidance: 'Some general changes of use may be allowed without full planning permission. Submit a prior approval application to your council to confirm. You can also request a Lawful Development Certificate confirming the change is allowed. Building Control may also be required. Professional advice is recommended.'
                },
                // Demolition & Site Works
                'PT17': {
                    category: 'Demolition & Site Works',
                    group: 'detail',
                    question: 'Will your project involve demolishing a building?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission often required; building control required.' },
                        { text: 'No', value: 'no', next: ['PT18'], continueFlow: true }
                    ],
                    guidance: 'Planning permission is often required, particularly in conservation areas. Building Control approval is also required.'
                },
                'PT18': {
                    category: 'Demolition & Site Works',
                    group: 'detail',
                    question: 'Will your project involve other site works like fences, walls, gates, or driveways?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T1'] },
                        { text: 'No', value: 'no', next: ['T1'], continueFlow: true }
                    ],
                    guidance: 'Some minor site works may be allowed without full planning permission. You should check local rules on height, location, and materials. Building Control rarely applies. Professional advice is recommended if unsure.'
                },
                // Site Checks & Considerations
                'T1': {
                    category: 'Site Checks & Considerations',
                    group: 'site',
                    question: 'Is your site in a flood risk area?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T2'], continueFlow: true },
                        { text: 'No', value: 'no', next: ['T2'], continueFlow: true }
                    ],
                    guidance: 'If your site is in a flood risk area, a Flood Risk Assessment may be required. Building Control requirements may change.'
                },
                'T2': {
                    category: 'Site Checks & Considerations',
                    group: 'site',
                    question: 'Will your project affect highway access, parking, or visibility?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T3'], continueFlow: true },
                        { text: 'No', value: 'no', next: ['T3'], continueFlow: true }
                    ],
                    guidance: 'If your project affects access, parking, or visibility, a transport assessment or highways approval may be required.'
                },
                'T3': {
                    category: 'Site Checks & Considerations',
                    group: 'site',
                    question: 'Is your site potentially contaminated?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T4'], continueFlow: true },
                        { text: 'No', value: 'no', next: ['T4'], continueFlow: true }
                    ],
                    guidance: 'If your site may be contaminated, a site investigation or remediation may be required to make it safe.'
                },
                'T4': {
                    category: 'Site Checks & Considerations',
                    group: 'site',
                    question: 'Will your project affect protected habitats, ecology, or trees?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['T5'], continueFlow: true },
                        { text: 'No', value: 'no', next: ['T5'], continueFlow: true }
                    ],
                    guidance: 'If your project affects habitats, protected species, or trees, an ecological survey or arboricultural assessment may be required.'
                },
                'T5': {
                    category: 'Site Checks & Considerations',
                    group: 'site',
                    question: 'Is your site in an area of archaeological interest?',
                    options: [
                        { text: 'Yes', value: 'yes', next: [], continueFlow: false },
                        { text: 'No', value: 'no', next: [], continueFlow: false }
                    ],
                    guidance: 'If your site is in an area of archaeological interest, a desk-based or on-site archaeological assessment may be required.'
                },
                // Loft Extension – PS1
                'PS1-01': {
                    category: 'Loft Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Is the loft a Mansard roof (a roof with two slopes on each side, the lower one being steeper)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS1-02'] }
                    ],
                    guidance: 'Mansard roofs are not allowed under permitted development rights. Planning permission is required.'
                },
                'PS1-02': {
                    category: 'Loft Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Does the loft raise the height of the walls at the edge of the roof (eaves) above the original?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS1-03'] }
                    ],
                    guidance: 'Raising the eaves above the original height removes permitted development rights.'
                },
                'PS1-03': {
                    category: 'Loft Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Will the total new space created by the loft exceed 40m² in a conservation area or 50m² elsewhere?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS1-04'] }
                    ],
                    guidance: 'If the total new loft space exceeds these limits, planning permission is required. Below these limits, permitted development may apply but Building Control approval is still needed.'
                },
                'PS1-04': {
                    category: 'Loft Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Is your property in a conservation area or a listed building (protected for historic or architectural interest)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission / LDC required.' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'If the property is in a conservation area or is listed, permitted development rights do not apply.'
                },
                // Single-storey Extension – PS2
                'PS2-01': {
                    category: 'Single-storey Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Will the extension project more than 4m if detached, or 3m if semi/terraced?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS2-02'] }
                    ],
                    guidance: 'Extensions beyond these projection limits require planning permission.'
                },
                'PS2-02': {
                    category: 'Single-storey Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Will the extension exceed 4m in height?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS2-03'] }
                    ],
                    guidance: 'Single-storey extensions over 4m high are not allowed under permitted development rights.'
                },
                'PS2-03': {
                    category: 'Single-storey Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Will the total area of extensions and outbuildings exceed 50% of the garden/curtilage?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS2-04'] }
                    ],
                    guidance: 'If the total area of extensions and outbuildings exceeds 50% of the curtilage, planning permission is required.'
                },
                'PS2-04': {
                    category: 'Single-storey Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Is the extension at the rear of the property and not in front of the main elevation?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS2-05'] },
                        { text: 'No', value: 'no', stop: true, result: 'Planning permission required.' }
                    ],
                    guidance: 'Extensions must be to the rear; front extensions require planning permission.'
                },
                'PS2-05': {
                    category: 'Single-storey Extension – Detailed Checks',
                    group: 'detail',
                    question: 'Is your property in a conservation area or a listed building (protected for historic or architectural interest)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission / LDC required.' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'Properties in conservation areas or listed buildings cannot rely on permitted development rights.'
                },
                // Conservatory – PS4
                'PS4-01': {
                    category: 'Conservatory – Detailed Checks',
                    group: 'detail',
                    question: 'Will the conservatory project more than 4m if detached, or 3m if semi/terraced?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS4-02'] }
                    ],
                    guidance: 'Conservatories beyond these projection limits require planning permission.'
                },
                'PS4-02': {
                    category: 'Conservatory – Detailed Checks',
                    group: 'detail',
                    question: 'Will the conservatory exceed 4m in height?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS4-03'] }
                    ],
                    guidance: 'Conservatories over 4m in height require planning permission.'
                },
                'PS4-03': {
                    category: 'Conservatory – Detailed Checks',
                    group: 'detail',
                    question: 'Will the total area of the conservatory plus other extensions/outbuildings exceed 50% of the garden/curtilage?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS4-04'] }
                    ],
                    guidance: 'If total coverage exceeds 50% of the garden, planning permission is required.'
                },
                'PS4-04': {
                    category: 'Conservatory – Detailed Checks',
                    group: 'detail',
                    question: 'Is any part of the conservatory within 2m of the side boundary and taller than 2.5m?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS4-05'] }
                    ],
                    guidance: 'Conservatories near boundaries and above height limits require planning permission.'
                },
                'PS4-05': {
                    category: 'Conservatory – Detailed Checks',
                    group: 'detail',
                    question: 'Is your property in a conservation area or a listed building (protected for historic or architectural interest)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission / Lawful Development Certificate required.' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'Properties in conservation areas or listed buildings cannot rely on permitted development rights. Submit a Lawful Development Certificate or planning application. Professional advice is recommended.'
                },
                // Garage – PS5
                'PS5-01': {
                    category: 'Garage / Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will the garage be converted into a habitable space (bedroom, office, etc.) or serviced (plumbing, kitchen, etc.)?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS5-02'] },
                        { text: 'No', value: 'no', next: ['PS5-02'] }
                    ],
                    guidance: 'Converting a garage into a habitable or serviced space normally requires Building Control approval to ensure safety and energy standards are met. Planning permission may still not be required if all other limits are met. Professional advice is recommended.'
                },
                'PS5-02': {
                    category: 'Garage / Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will the garage exceed 4m in height (or 3m if within 2m of boundary)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS5-03'] }
                    ],
                    guidance: 'If the garage exceeds permitted height limits, planning permission is required.'
                },
                'PS5-03': {
                    category: 'Garage / Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will the total area of the garage plus other outbuildings/extensions exceed 50% of the garden/curtilage?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS5-04'] }
                    ],
                    guidance: 'If outbuildings and extensions cover more than half the garden, planning permission is required.'
                },
                'PS5-04': {
                    category: 'Garage / Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will the garage be used as a separate dwelling or business?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS5-05'] }
                    ],
                    guidance: 'Using a garage as a separate home or business is not automatically allowed and usually needs planning permission.'
                },
                'PS5-05': {
                    category: 'Garage / Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Is your property in a conservation area or a listed building (protected for historic or architectural interest)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission / Lawful Development Certificate required.' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'Properties in conservation areas or listed buildings cannot rely on permitted development rights. Submit a Lawful Development Certificate or planning application. Professional advice is recommended.'
                },
                // External Building – PS6
                'PS6-01': {
                    category: 'External Building – Detailed Checks',
                    group: 'detail',
                    question: 'Will the building be habitable or include services (plumbing, kitchen, heating, electrics)?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS6-02'] },
                        { text: 'No', value: 'no', next: ['PS6-02'] }
                    ],
                    guidance: 'Habitable or serviced outbuildings require Building Control approval.'
                },
                'PS6-02': {
                    category: 'External Building – Detailed Checks',
                    group: 'detail',
                    question: 'Will the building exceed 4m in height (or 3m if within 2m of a boundary)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS6-03'] }
                    ],
                    guidance: 'Buildings that exceed permitted height limits require planning permission.'
                },
                'PS6-03': {
                    category: 'External Building – Detailed Checks',
                    group: 'detail',
                    question: 'Will the total area of this building plus other extensions/outbuildings exceed 50% of the garden/curtilage?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS6-04'] }
                    ],
                    guidance: 'If outbuildings and extensions cover more than half the garden, planning permission is required.'
                },
                'PS6-04': {
                    category: 'External Building – Detailed Checks',
                    group: 'detail',
                    question: 'Is the building located at the rear or side of the house and at least 2m from any side boundary if taller than 2.5m?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS6-05'] },
                        { text: 'No', value: 'no', stop: true, result: 'Planning permission required.' }
                    ],
                    guidance: 'Buildings in front of the house or too close to boundaries require planning permission.'
                },
                'PS6-05': {
                    category: 'External Building – Detailed Checks',
                    group: 'detail',
                    question: 'Is your property in a conservation area or a listed building (protected for historic or architectural interest)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission / Lawful Development Certificate required.' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'Properties in conservation areas or listed buildings cannot rely on permitted development rights. Submit a Lawful Development Certificate or planning application. Professional advice is recommended.'
                },
                // Porch – PS8
                'PS8-01': {
                    category: 'Porch – Detailed Checks',
                    group: 'detail',
                    question: 'Will the porch project more than 3m from the original wall?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS8-02'] }
                    ],
                    guidance: 'Porches projecting more than 3m from the original wall require planning permission.'
                },
                'PS8-02': {
                    category: 'Porch – Detailed Checks',
                    group: 'detail',
                    question: 'Will the porch exceed 3m in height?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS8-03'] }
                    ],
                    guidance: 'Porches taller than 3m require planning permission.'
                },
                'PS8-03': {
                    category: 'Porch – Detailed Checks',
                    group: 'detail',
                    question: 'Will the porch cover more than 50% of the frontage of the house?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS8-04'] }
                    ],
                    guidance: 'If the porch would cover more than half of the frontage, planning permission is required.'
                },
                'PS8-04': {
                    category: 'Porch – Detailed Checks',
                    group: 'detail',
                    question: 'Is your property in a conservation area or a listed building (protected for historic or architectural interest)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission / Lawful Development Certificate required.' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'Properties in conservation areas or listed buildings cannot rely on permitted development rights. Submit a Lawful Development Certificate or planning application. Professional advice is recommended.'
                },
                // Annex – PS9
                'PS9-01': {
                    category: 'Annex / Granny Flat – Detailed Checks',
                    group: 'detail',
                    question: 'Will the building be used as a separate dwelling or business?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS9-02'] }
                    ],
                    guidance: 'The annex must remain ancillary to the main dwelling to fall under permitted development.'
                },
                'PS9-02': {
                    category: 'Annex / Granny Flat – Detailed Checks',
                    group: 'detail',
                    question: 'Will the annex be more than one storey?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS9-03'] }
                    ],
                    guidance: 'Annexes taller than one storey require planning permission.'
                },
                'PS9-03': {
                    category: 'Annex / Granny Flat – Detailed Checks',
                    group: 'detail',
                    question: 'Will the annex exceed 4 metres in height (or 3 metres if within 2 metres of a boundary)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS9-04'] }
                    ],
                    guidance: 'Buildings exceeding these heights require planning permission.'
                },
                'PS9-04': {
                    category: 'Annex / Granny Flat – Detailed Checks',
                    group: 'detail',
                    question: 'Will the total area of the annex plus other outbuildings/extensions exceed 50% of the garden/curtilage?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS9-05'] }
                    ],
                    guidance: 'If annex plus other outbuildings exceed half the garden, planning permission is required.'
                },
                'PS9-05': {
                    category: 'Annex / Granny Flat – Detailed Checks',
                    group: 'detail',
                    question: 'Is the annex located at the front of the main dwelling?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS9-06'] }
                    ],
                    guidance: 'Annexes in front of the main dwelling are not permitted development.'
                },
                'PS9-06': {
                    category: 'Annex / Granny Flat – Detailed Checks',
                    group: 'detail',
                    question: 'Is your property in a conservation area or a listed building (protected for historic or architectural interest)?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission / Lawful Development Certificate required.' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'Properties in conservation areas or listed buildings cannot rely on permitted development rights. Submit a Lawful Development Certificate or planning application. Professional advice is recommended.'
                },
                // Flat Conversion – PS11
                'PS11-01': {
                    category: 'Flat Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Are you converting more than one flat into a single home?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS11-02'] },
                        { text: 'No', value: 'no', next: ['T1'] }
                    ],
                    guidance: 'Converting more than one flat into a single home can be permitted development, provided other works do not require planning permission.'
                    // Note: CSV marks this as "Stop: Yes" but guidance indicates PD is allowed.
                    // Code treats as non-stopping (aligned with guidance text) - if Yes, continue to PS11-02 for detailed checks.
                },
                'PS11-02': {
                    category: 'Flat Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will any extension exceed 4 metres in height, or 3 metres if it is within 2 metres of a boundary?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS11-03'] }
                    ],
                    guidance: 'Extensions that exceed these height limits are not allowed under permitted development.'
                },
                'PS11-03': {
                    category: 'Flat Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will extensions and outbuildings cover more than 50 percent of the garden or curtilage?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS11-04'] }
                    ],
                    guidance: 'Extensions and outbuildings must not cover more than half of the garden to remain within permitted development.'
                },
                'PS11-04': {
                    category: 'Flat Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will any extension be more than one storey?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission required.' },
                        { text: 'No', value: 'no', next: ['PS11-05'] }
                    ],
                    guidance: 'Extensions of more than one storey are not allowed under permitted development.'
                },
                'PS11-05': {
                    category: 'Flat Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will the conversion involve external changes such as new windows, doors, extensions, or changes to the roof?',
                    options: [
                        { text: 'Yes', value: 'yes', stop: true, result: 'Planning permission may be required.' },
                        { text: 'No', value: 'no', next: ['PS11-06'] }
                    ],
                    guidance: 'External changes are likely to require planning permission if they alter the appearance of the building or add new openings.'
                },
                'PS11-06': {
                    category: 'Flat Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Does the conversion involve structural work?',
                    options: [
                        { text: 'Yes', value: 'yes', next: ['PS11-07'] },
                        { text: 'No', value: 'no', next: ['PS11-07'] }
                    ],
                    guidance: 'Any structural changes must meet Building Control requirements.'
                },
                'PS11-07': {
                    category: 'Flat Conversion – Detailed Checks',
                    group: 'detail',
                    question: 'Will the conversion affect fire safety or access, for example where the building has more than one storey?',
                    options: [
                        { text: 'Yes', value: 'yes' },
                        { text: 'No', value: 'no' }
                    ],
                    guidance: 'Fire safety and safe access must be addressed as part of the conversion. Building Control approval is required.'
                }
            };

            // Grouped screens (show related questions together)
            const groups = {
                LG: {
                    id: 'LG',
                    title: 'About Your Property & Location',
                    breadcrumb: 'Location & property checks',
                    step: 'location',
                    questionIds: ['LG1', 'LG2', 'LG3', 'LG4']
                },
                PG: {
                    id: 'PG',
                    title: 'About Your Project',
                    breadcrumb: 'Project gateway questions',
                    step: 'project',
                    questionIds: ['PG1', 'PG2', 'PG3', 'PG4', 'PG5']
                },
                EXT: {
                    id: 'EXT',
                    title: 'Extensions & Additions',
                    breadcrumb: 'Extension types in your project',
                    step: 'detail',
                    questionIds: ['PT1', 'PT2', 'PT3', 'PT4', 'PT5', 'PT6', 'PT7', 'PT8', 'PT9']
                },
                CONV: {
                    id: 'CONV',
                    title: 'Conversions & Change of Use',
                    breadcrumb: 'Conversion types in your project',
                    step: 'detail',
                    questionIds: ['PT10', 'PT11', 'PT12', 'PT13', 'PT14', 'PT15', 'PT16']
                },
                DEM: {
                    id: 'DEM',
                    title: 'Demolition & Site Works',
                    breadcrumb: 'Demolition and site operations',
                    step: 'detail',
                    questionIds: ['PT17', 'PT18']
                },
                PS1: {
                    id: 'PS1',
                    title: 'Loft Extension – Detailed Checks',
                    breadcrumb: 'Detailed checks for loft extensions',
                    step: 'detail',
                    questionIds: ['PS1-01', 'PS1-02', 'PS1-03', 'PS1-04']
                },
                PS2: {
                    id: 'PS2',
                    title: 'Single-storey Extension – Detailed Checks',
                    breadcrumb: 'Detailed checks for single-storey extensions',
                    step: 'detail',
                    questionIds: ['PS2-01', 'PS2-02', 'PS2-03', 'PS2-04', 'PS2-05']
                },
                PS4: {
                    id: 'PS4',
                    title: 'Conservatory – Detailed Checks',
                    breadcrumb: 'Detailed checks for conservatories',
                    step: 'detail',
                    questionIds: ['PS4-01', 'PS4-02', 'PS4-03', 'PS4-04', 'PS4-05']
                },
                PS5: {
                    id: 'PS5',
                    title: 'Garage / Conversion – Detailed Checks',
                    breadcrumb: 'Detailed checks for garages',
                    step: 'detail',
                    questionIds: ['PS5-01', 'PS5-02', 'PS5-03', 'PS5-04', 'PS5-05']
                },
                PS6: {
                    id: 'PS6',
                    title: 'External Building – Detailed Checks',
                    breadcrumb: 'Detailed checks for external buildings',
                    step: 'detail',
                    questionIds: ['PS6-01', 'PS6-02', 'PS6-03', 'PS6-04', 'PS6-05']
                },
                PS8: {
                    id: 'PS8',
                    title: 'Porch – Detailed Checks',
                    breadcrumb: 'Detailed checks for porches',
                    step: 'detail',
                    questionIds: ['PS8-01', 'PS8-02', 'PS8-03', 'PS8-04']
                },
                PS9: {
                    id: 'PS9',
                    title: 'Annex / Granny Flat – Detailed Checks',
                    breadcrumb: 'Detailed checks for annexes',
                    step: 'detail',
                    questionIds: ['PS9-01', 'PS9-02', 'PS9-03', 'PS9-04', 'PS9-05', 'PS9-06']
                },
                PS11: {
                    id: 'PS11',
                    title: 'Flat Conversion – Detailed Checks',
                    breadcrumb: 'Detailed checks for flat conversion',
                    step: 'detail',
                    questionIds: ['PS11-01', 'PS11-02', 'PS11-03', 'PS11-04', 'PS11-05', 'PS11-06', 'PS11-07']
                },
                SITE: {
                    id: 'SITE',
                    title: 'Site Checks & Considerations',
                    breadcrumb: 'Constraints and considerations for your site',
                    step: 'site',
                    questionIds: ['T1', 'T2', 'T3', 'T4', 'T5']
                }
            };

            // State
            let flow = [];
            let currentGroupId = 'LG';
            let currentGroupIndex = 0;
            let currentQuestionId = null; // active question within current group
            let groupActiveQuestion = {}; // remembers last active question per group
            let answers = {};
            let stopState = null; // {result, guidance, fromQuestion}
            let questionHistory = []; // Track navigation history for back button

            // Accordion state for PT → PS inline details (EXT/CONV)
            const ptToPs = {
                PT1: 'PS1',
                PT2: 'PS2',
                PT4: 'PS4',
                PT5: 'PS5',
                PT6: 'PS6',
                PT8: 'PS8',
                PT9: 'PS9',
                PT11: 'PS11'
            };
            let accordionState = {
                EXT: { mode: 'pt', activePTIndex: 0, expandedPT: null, psGroup: null, psIndex: 0 },
                CONV: { mode: 'pt', activePTIndex: 0, expandedPT: null, psGroup: null, psIndex: 0 }
            };

            // Group phase state: tracks whether we're in hard-stop phase or non-hard-stop phase
            let groupPhaseState = {};
            let autoAdvanceTimer = null; // Cancellable auto-advance timer (prevents race conditions)

            function init() {
                answers = {};
                groupActiveQuestion = {};
                questionHistory = [];
                accordionState = {
                    EXT: { mode: 'pt', activePTIndex: 0, expandedPT: null, psGroup: null, psIndex: 0 },
                    CONV: { mode: 'pt', activePTIndex: 0, expandedPT: null, psGroup: null, psIndex: 0 }
                };
                groupPhaseState = {};
                stopState = null;
                flow = computeFlow();
                currentGroupId = flow[0] || 'LG';
                currentGroupIndex = 0;
                const firstGroup = groups[currentGroupId];
                currentQuestionId = firstGroup ? firstGroup.questionIds[0] : null;
                // Add initial question to history
                if (currentQuestionId) {
                    questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                }
                renderGroup(currentGroupId);
                updateStepIndicators();
                updateProgress();
                document.getElementById('backBtn').addEventListener('click', goBack);
                document.getElementById('nextBtn').addEventListener('click', goNext);
            }

            // Helper function to check if a question has a hard stop
            function hasHardStop(qId) {
                const q = questions[qId];
                if (!q) return false;
                return q.options.some(opt => opt.stop === true);
            }

            // Extract hard-stop questions from a group
            // Note: For EXT/CONV, we only extract PT-level hard-stops here
            // PS sub-questions are handled in accordion flow when PT is answered "Yes"
            function extractHardStopQuestions(groupId) {
                const group = groups[groupId];
                if (!group) return [];

                const hardStopQuestions = [];

                // For all groups, check direct questions
                group.questionIds.forEach(qId => {
                    if (hasHardStop(qId)) {
                        hardStopQuestions.push(qId);
                    }
                });

                return hardStopQuestions;
            }

            // Separate hard-stop questions from non-hard-stop questions in a group
            // Note: PS sub-questions are not included here - they're handled in accordion flow
            function separateHardStops(groupId) {
                const group = groups[groupId];
                if (!group) return { hardStops: [], nonHardStops: [] };

                const hardStops = [];
                const nonHardStops = [];

                // For all groups, separate based on hard-stop status
                group.questionIds.forEach(qId => {
                    if (hasHardStop(qId)) {
                        hardStops.push(qId);
                    } else {
                        nonHardStops.push(qId);
                    }
                });

                return { hardStops, nonHardStops };
            }

            // Check if we're currently in hard-stop phase for a group
            function isInHardStopPhase(groupId) {
                const phaseState = groupPhaseState[groupId];
                if (!phaseState) {
                    // Initialize phase state
                    const { hardStops } = separateHardStops(groupId);
                    groupPhaseState[groupId] = {
                        phase: hardStops.length > 0 ? 'hardStop' : 'nonHardStop',
                        hardStops: hardStops,
                        nonHardStops: separateHardStops(groupId).nonHardStops
                    };
                }
                return groupPhaseState[groupId].phase === 'hardStop';
            }

            // Get selected hard-stop questions for a group
            function getSelectedHardStops(groupId) {
                const phaseState = groupPhaseState[groupId];
                if (!phaseState) return [];

                return phaseState.hardStops.filter(qId => {
                    return answers[qId] && answers[qId].value === 'yes';
                });
            }

            // Mark all hard-stop questions as "no" for a group
            function markHardStopsAsNo(groupId) {
                const phaseState = groupPhaseState[groupId];
                if (!phaseState) return;

                phaseState.hardStops.forEach(qId => {
                    if (!answers[qId]) {
                        const q = questions[qId];
                        const noOption = q.options.find(o => o.value === 'no');
                        if (noOption) {
                            answers[qId] = {
                                question: q.question,
                                answer: noOption.text,
                                value: 'no'
                            };
                        }
                    }
                });
            }

            // Move from hard-stop phase to non-hard-stop phase
            function moveToNonHardStopPhase(groupId) {
                const phaseState = groupPhaseState[groupId];
                if (!phaseState) return;

                phaseState.phase = 'nonHardStop';

                // Set first non-hard-stop question as active
                if (phaseState.nonHardStops.length > 0) {
                    currentQuestionId = phaseState.nonHardStops[0];
                    groupActiveQuestion[groupId] = currentQuestionId;
                    questionHistory.push({ groupId: groupId, questionId: currentQuestionId });
                }
            }

            function computeFlow() {
                const base = ['LG', 'PG'];

                // Decide which top-level sections apply based on Project Gateway
                const wantsExt = answers.PG3 && answers.PG3.value === 'yes';
                const wantsConv = answers.PG4 && answers.PG4.value === 'yes';
                const wantsDem = answers.PG5 && answers.PG5.value === 'yes';

                // Site checks shown if any project types selected - comes BEFORE project features
                const anyProjectType = wantsExt || wantsConv || wantsDem;
                if (anyProjectType) base.push('SITE');

                // Project features come after site checks
                if (wantsExt) base.push('EXT');
                if (wantsConv) base.push('CONV');
                if (wantsDem) base.push('DEM');

                return base;
            }

            function updateStepIndicators() {
                const step = groups[currentGroupId]?.step || 'detail';
                const sidebar = document.getElementById('sideBar');
                if (sidebar && sidebar.updateStep) {
                    sidebar.updateStep(step);
                }
            }

            // Calculate real question numbers including PS questions
            function calculateQuestionNumbers() {
                let totalQuestions = 0;
                let currentQuestionNum = 0;
                let foundCurrent = false;

                // Count questions in each group in the flow
                for (let i = 0; i < flow.length; i++) {
                    const groupId = flow[i];
                    const g = groups[groupId];
                    if (!g) continue;

                    // For EXT and CONV groups, check if PT questions have PS sets
                    if (groupId === 'EXT' || groupId === 'CONV') {
                        for (const ptId of g.questionIds) {
                            const ptAnswer = answers[ptId];
                            const psGroupId = ptToPs[ptId];
                            const isCurrentGroup = currentGroupId === groupId;
                            const isCurrentPT = ptId === currentQuestionId;

                            // Check if we're in a PS accordion for this PT
                            const state = accordionState[groupId];
                            const inPSAccordion = state && state.mode === 'ps' && state.expandedPT === ptId && state.psGroup === psGroupId;

                            if (ptAnswer && ptAnswer.value === 'yes' && psGroupId) {
                                // PT answered "Yes" - count PS questions
                                const psGroup = groups[psGroupId];
                                if (psGroup) {
                                    totalQuestions += psGroup.questionIds.length;

                                    if (!foundCurrent) {
                                        if (inPSAccordion) {
                                            // We're in this PS set
                                            currentQuestionNum += state.psIndex + 1;
                                            foundCurrent = true;
                                        } else if (isCurrentGroup && isCurrentPT) {
                                            // We're on the PT question itself (before PS opens)
                                            currentQuestionNum += 1;
                                            foundCurrent = true;
                                        } else {
                                            currentQuestionNum += psGroup.questionIds.length;
                                        }
                                    }
                                }
                            } else {
                                // PT answered "No" or no PS set - count as 1 question
                                totalQuestions += 1;

                                if (!foundCurrent) {
                                    if (isCurrentGroup && isCurrentPT && !inPSAccordion) {
                                        currentQuestionNum += 1;
                                        foundCurrent = true;
                                    } else {
                                        currentQuestionNum += 1;
                                    }
                                }
                            }
                        }
                    } else {
                        // Regular groups - count all questions
                        totalQuestions += g.questionIds.length;

                        if (!foundCurrent) {
                            if (currentGroupId === groupId) {
                                // Find position of current question in this group
                                const currentIdx = g.questionIds.indexOf(currentQuestionId);
                                if (currentIdx >= 0) {
                                    currentQuestionNum += currentIdx + 1;
                                    foundCurrent = true;
                                } else {
                                    currentQuestionNum += g.questionIds.length;
                                }
                            } else {
                                currentQuestionNum += g.questionIds.length;
                            }
                        }
                    }
                }

                return {
                    current: foundCurrent ? currentQuestionNum : Math.max(1, currentQuestionNum),
                    total: Math.max(1, totalQuestions)
                };
            }

            // Helper function to get icon SVG for options
            function getOptionIcon(optionText, optionValue) {
                const iconMap = {
                    'yes': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>`,
                    'no': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>`,
                    'detached': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(10, 20)" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round" stroke-linecap="round">
                        <!-- Left Face (Striped) -->
                        <path d="M20 50 L20 80 L50 95 L50 65 Z" fill="#F8F8F8"/>
                        <!-- Stripes -->
                        <path d="M25 52 L25 82 M30 55 L30 85 M35 57 L35 87 M40 60 L40 90 M45 62 L45 92" stroke="#A0A0A0" stroke-width="0.8"/>
                        <!-- Right Face -->
                        <path d="M50 95 L80 80 L80 50 L50 65 Z" fill="#FFFFFF"/>
                        <!-- Roof Left -->
                        <path d="M20 50 L35 35 L50 65 Z" fill="#F0F0F0"/>
                        <!-- Roof Right -->
                        <path d="M35 35 L65 20 L80 50 L50 65 Z" fill="#FFFFFF"/>
                        <!-- Outlines -->
                        <path d="M20 50 L20 80 L50 95 L80 80 L80 50"/>
                        <path d="M20 50 L35 35 L65 20 L80 50"/>
                        <path d="M35 35 L50 65 L50 95"/>
                    </g>
                </svg>`,
                    'semi-detached': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(10, 20)" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round" stroke-linecap="round">
                        <!-- Left House (Striped) -->
                        <path d="M10 50 L10 80 L40 95 L40 65 Z" fill="#F8F8F8"/>
                        <path d="M15 52 L15 82 M20 55 L20 85 M25 57 L25 87 M30 60 L30 90 M35 62 L35 92" stroke="#A0A0A0" stroke-width="0.8"/>
                        <!-- Left Roof -->
                        <path d="M10 50 L25 35 L40 65 Z" fill="#F0F0F0"/>
                        <path d="M25 35 L40 20 L40 65 Z" fill="#FFFFFF"/>
                        
                        <!-- Right House (Plain) -->
                        <path d="M40 95 L70 80 L70 50 L40 65 Z" fill="#FFFFFF"/>
                        <!-- Right Roof -->
                        <path d="M40 20 L70 20 L70 50 L40 65 Z" fill="#FFFFFF"/>
                        
                        <!-- Outlines -->
                        <path d="M10 50 L10 80 L70 80 L70 50"/>
                        <path d="M10 50 L25 35 L40 20 L70 20 L70 50"/>
                        <path d="M40 65 L40 95"/>
                        <path d="M25 35 L40 65 L70 50"/>
                    </g>
                </svg>`,
                    'terrace': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(5, 20)" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round" stroke-linecap="round">
                        <!-- Middle House (Striped) -->
                        <!-- Left House (Plain) -->
                        <path d="M10 80 L30 90 L30 60 L10 50 Z" fill="#FFFFFF"/>
                        <path d="M10 50 L20 40 L30 60 Z" fill="#FFFFFF"/>
                        <path d="M20 40 L30 35 L30 60 Z" fill="#FFFFFF"/>
                        
                        <!-- Middle House (Striped) -->
                        <path d="M30 90 L60 75 L60 45 L30 60 Z" fill="#F8F8F8"/>
                        <path d="M35 87 M40 85 M45 82 M50 80 M55 77 L55 47 L50 50 L45 52 L40 55 L35 57 Z" fill="none"/>
                        <path d="M35 87 L35 57 M40 85 L40 55 M45 82 L45 52 M50 80 L50 50 M55 77 L55 47" stroke="#A0A0A0" stroke-width="0.8"/>
                        <!-- Middle Roof -->
                        <path d="M30 35 L60 20 L60 45 L30 60 Z" fill="#FFFFFF"/>
                        
                        <!-- Right House (Plain) -->
                        <path d="M60 75 L90 60 L90 30 L60 45 Z" fill="#FFFFFF"/>
                        <!-- Right Roof -->
                        <path d="M60 20 L90 20 L90 30 L60 45 Z" fill="#FFFFFF"/>

                        <!-- Outlines general -->
                        <path d="M10 50 L10 80 L30 90 L90 60 L90 30"/>
                        <path d="M10 50 L20 40 L30 35 L90 20 L90 30"/>
                        <path d="M30 60 L30 90"/>
                        <path d="M60 45 L60 75"/>
                        <path d="M20 40 L30 60 L90 30"/>
                        <path d="M30 35 L60 20 L60 45 L30 60"/>
                    </g>
                </svg>`,
                    'end-terrace': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(10, 20)" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round" stroke-linecap="round">
                        <!-- Left House (Striped - End) -->
                        <path d="M10 50 L10 80 L40 95 L40 65 Z" fill="#F8F8F8"/>
                        <path d="M15 52 L15 82 M20 55 L20 85 M25 57 L25 87 M30 60 L30 90 M35 62 L35 92" stroke="#A0A0A0" stroke-width="0.8"/>
                        <path d="M10 50 L25 35 L40 65 Z" fill="#F0F0F0"/>
                        <path d="M25 35 L40 20 L40 65 Z" fill="#FFFFFF"/>
                        
                        <!-- Right House 1 -->
                        <path d="M40 95 L70 80 L70 50 L40 65 Z" fill="#FFFFFF"/>
                        <path d="M40 20 L70 20 L70 50 L40 65 Z" fill="#FFFFFF"/>

                        <!-- Right House 2 -->
                        <path d="M70 80 L90 70 L90 40 L70 50 Z" fill="#FFFFFF"/>
                        <path d="M70 20 L90 20 L90 40 L70 50 Z" fill="#FFFFFF"/>

                        <path d="M10 50 L10 80 L40 95 L90 70 L90 40"/>
                        <path d="M10 50 L25 35 L40 20 L90 20 L90 40"/>
                        <path d="M40 65 L40 95"/>
                        <path d="M70 50 L70 80"/>
                        <path d="M25 35 L40 65 M40 20 L40 65 M70 20 L70 50"/>
                    </g>
                </svg>`,
                    'loft': `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="50" width="40" height="30" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <polygon points="20,50 40,30 60,50" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <rect x="25" y="55" width="8" height="8" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <rect x="47" y="55" width="8" height="8" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <line x1="30" y1="35" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="50" y1="20" x2="70" y2="35" stroke="currentColor" stroke-width="1.5"/>
                </svg>`,
                    'extension': `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="40" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <rect x="25" y="45" width="8" height="8" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <polygon points="20,40 35,25 50,40" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <rect x="50" y="45" width="20" height="20" stroke="currentColor" fill="none" stroke-width="1.5" stroke-dasharray="2,2"/>
                    <line x1="50" y1="45" x2="50" y2="65" stroke="currentColor" stroke-width="1.5"/>
                </svg>`,
                    'balcony': `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="40" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <rect x="25" y="45" width="8" height="8" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <polygon points="20,40 35,25 50,40" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <rect x="20" y="55" width="30" height="8" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <line x1="20" y1="55" x2="20" y2="63" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="50" y1="55" x2="50" y2="63" stroke="currentColor" stroke-width="1.5"/>
                </svg>`,
                    'conversion': `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="40" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <rect x="25" y="45" width="8" height="8" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <polygon points="20,40 35,25 50,40" stroke="currentColor" fill="none" stroke-width="1.5"/>
                    <line x1="30" y1="50" x2="30" y2="60" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="40" y1="50" x2="40" y2="60" stroke="currentColor" stroke-width="1.5"/>
                </svg>`,
                    'demolition': `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="40" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1.5" opacity="0.5"/>
                    <polygon points="20,40 35,25 50,40" stroke="currentColor" fill="none" stroke-width="1.5" opacity="0.5"/>
                    <line x1="15" y1="35" x2="55" y2="75" stroke="currentColor" stroke-width="2"/>
                    <line x1="55" y1="35" x2="15" y2="75" stroke="currentColor" stroke-width="2"/>
                </svg>`
                };

                // Check for specific keywords in option text
                const textLower = optionText.toLowerCase();
                if (textLower.includes('detached') && !textLower.includes('semi')) return iconMap['detached'];
                if (textLower.includes('semi-detached') || textLower.includes('semi detached')) return iconMap['semi-detached'];
                if (textLower.includes('terrace') && textLower.includes('end')) return iconMap['end-terrace'];
                if (textLower.includes('terrace')) return iconMap['terrace'];
                if (textLower.includes('loft')) return iconMap['loft'];
                if (textLower.includes('extension') || textLower.includes('extend')) return iconMap['extension'];
                if (textLower.includes('balcony')) return iconMap['balcony'];
                if (textLower.includes('convert') || textLower.includes('conversion')) return iconMap['conversion'];
                if (textLower.includes('demolish') || textLower.includes('demolition')) return iconMap['demolition'];

                // Default icons for yes/no
                return iconMap[optionValue] || iconMap['yes'];
            }

            function renderGroup(groupId) {
                const g = groups[groupId];
                const container = document.getElementById('questionContainer');
                const panelTitle = document.getElementById('panelTitle');
                const breadcrumb = document.getElementById('breadcrumbText');
                const indexLabel = document.getElementById('questionIndex');
                const totalLabel = document.getElementById('questionTotal');

                if (panelTitle) panelTitle.textContent = g.title;
                if (breadcrumb) breadcrumb.textContent = g.breadcrumb;

                // Calculate real question numbers
                const questionNums = calculateQuestionNumbers();
                indexLabel.textContent = questionNums.current.toString();
                totalLabel.textContent = questionNums.total.toString();

                // Initialize phase state for this group
                const { hardStops, nonHardStops } = separateHardStops(groupId);
                if (!groupPhaseState[groupId]) {
                    groupPhaseState[groupId] = {
                        phase: hardStops.length > 0 ? 'hardStop' : 'nonHardStop',
                        hardStops: hardStops,
                        nonHardStops: nonHardStops
                    };
                }

                const phaseState = groupPhaseState[groupId];
                const isHardStopPhase = phaseState.phase === 'hardStop' && phaseState.hardStops.length > 0;

                // Special handling for LG group (first 4 questions) - show as multi-select
                // LG group is already all hard-stops, so keep existing behavior
                if (groupId === 'LG' || groupId === 'SITE') {
                    // --- Illustration file paths & metadata for LG questions ---
                    const lgMeta = {
                        'LG1': { label: 'Listed building', desc: 'Your property is officially recognised for its special architectural or historic interest.', illustration: 'components/illustrations/listed-building.svg' },
                        'LG2': { label: 'Conservation area', desc: 'Your property is in an area recognised for its special character or historic importance.', illustration: 'components/illustrations/conservation-area.svg' },
                        'LG3': { label: 'Article 4 restriction', desc: 'Your local council has removed some standard permitted development rights on this property.', illustration: 'components/illustrations/article-4-restriction.svg' },
                        'LG4': { label: 'Protected area', desc: 'National Park, Area of Outstanding Natural Beauty, or World Heritage Site.', illustration: 'components/illustrations/protected-area.svg' }
                    };

                    const sectionTitle = groupId === 'LG' ? 'Location constraints' : 'Site constraints';
                    const pageTitle = groupId === 'LG'
                        ? 'Does any of this apply to your project?'
                        : 'Do any of these apply to your site?';
                    const pageSub = groupId === 'LG'
                        ? 'Select everything that applies to your property — if nothing applies, just continue.'
                        : 'Select all that apply to your site — if none apply, just continue.';

                    container.innerHTML = `
                    <div class="question-section">
                        <div class="crumb">
                            <span>${g.title}</span> › ${sectionTitle}
                        </div>
                        <div class="content-title">${pageTitle}</div>
                        <div class="content-sub">${pageSub}</div>

                        <div class="q-block anim-1">
                            <div class="q-header">
                                <div>
                                    <div class="q-label">Question <span id="qBlockIdx">1</span> of <span id="qBlockTotal">${g.questionIds.length}</span></div>
                                    <div class="q-title">${sectionTitle}</div>
                                </div>
                                <div class="q-badge">Select all that apply</div>
                            </div>
                            <div class="options-list">
                                ${g.questionIds.map((qId, idx) => {
                        const q = questions[qId];
                        if (!q) return '';
                        const meta = lgMeta[qId] || {};
                        const isSelected = answers[qId] && answers[qId].value === 'yes';
                        const label = meta.label || q.question.split(',')[0].substring(0, 40);
                        const desc = meta.desc || q.question;
                        const illus = meta.illustration || '';
                        return `
                                    <option-row
                                        class="anim-row-${Math.min(idx + 1, 5)}"
                                        label="${label}"
                                        description="${desc}"
                                        illustration="${illus}"
                                        qid="${qId}"
                                        guidance="${(q.guidance || '').replace(/"/g, '&quot;')}"
                                        ${isSelected ? 'selected' : ''}
                                    ></option-row>
                                    ${isSelected && q.guidance ? `<div class="callout"><span class="callout-icon">⚠️</span><div class="callout-text">${q.guidance}</div></div>` : ''}
                                `;
                    }).join('')}
                            </div>
                            <div class="none-option" id="noneOption">
                                <span class="none-icon">⊘</span>
                                None of these apply to my property — skip this section
                            </div>
                        </div>
                    </div>
                `;

                    // Listen for option-toggle events from <option-row> elements
                    container.addEventListener('option-toggle', function (e) {
                        const { qid, selected } = e.detail;
                        const q = questions[qid];
                        if (!q) return;
                        const row = e.target;

                        if (!selected) {
                            // Deselected
                            delete answers[qid];
                            // Remove callout
                            const calloutEl = row.nextElementSibling;
                            if (calloutEl && calloutEl.classList.contains('callout')) calloutEl.remove();
                        } else {
                            // Selected
                            const yesOption = q.options.find(o => o.value === 'yes');
                            answers[qid] = {
                                question: q.question,
                                answer: yesOption ? yesOption.text : 'Yes',
                                value: 'yes'
                            };

                            // Show callout if guidance exists
                            if (q.guidance) {
                                let calloutEl = row.nextElementSibling;
                                if (!calloutEl || !calloutEl.classList.contains('callout')) {
                                    calloutEl = document.createElement('div');
                                    calloutEl.className = 'callout';
                                    calloutEl.innerHTML = `<span class="callout-icon">⚠️</span><div class="callout-text">${q.guidance}</div>`;
                                    row.parentNode.insertBefore(calloutEl, row.nextSibling);
                                }
                            }

                            // Check if this triggers a stop (only for LG group)
                            if (groupId === 'LG' && yesOption && yesOption.stop) {
                                stopState = {
                                    result: yesOption.result,
                                    guidance: yesOption.guidance || q.guidance,
                                    fromQuestion: qid
                                };
                            }
                        }

                        updateContinueState();
                    });

                    // None option handler
                    const noneBtn = container.querySelector('#noneOption');
                    if (noneBtn) {
                        noneBtn.addEventListener('click', function () {
                            // Deselect all option-row elements
                            container.querySelectorAll('option-row[selected]').forEach(el => {
                                el.selected = false;
                                const qId = el.getAttribute('qid');
                                delete answers[qId];
                            });
                            // Remove all callouts
                            container.querySelectorAll('.callout').forEach(c => c.remove());
                            updateContinueState();
                            // Auto-advance
                            document.getElementById('nextBtn').disabled = false;
                            document.getElementById('nextBtn').click();
                        });
                    }

                    updateContinueState();
                    return;
                }

                // Render hard-stop phase first (if applicable and we're in hard-stop phase)
                // BUT: Skip hard-stop phase for EXT/CONV groups as they have accordion PS sub-questions
                // Hard-stops in EXT/CONV PT questions will be handled in normal flow
                if (isHardStopPhase && phaseState.hardStops.length > 0 && groupId !== 'EXT' && groupId !== 'CONV') {
                    // Check if any hard-stop is already selected - if so, we should have already shown results
                    const selectedHardStops = getSelectedHardStops(groupId);
                    if (selectedHardStops.length > 0) {
                        // This shouldn't happen, but handle it gracefully
                        const firstSelected = selectedHardStops[0];
                        const q = questions[firstSelected];
                        const yesOption = q.options.find(o => o.value === 'yes' && o.stop);
                        if (yesOption) {
                            stopState = {
                                result: yesOption.result,
                                guidance: yesOption.guidance || q.guidance,
                                fromQuestion: firstSelected
                            };
                            showResults();
                            return;
                        }
                    }

                    // Map hardstops into the standardized format expected by checkbox-question
                    const checkboxOptions = phaseState.hardStops.map(qId => {
                        const q = questions[qId];
                        return {
                            text: q.question,
                            value: qId, // Use the qId itself as the value for tracking
                            description: q.guidance || ''
                        };
                    });

                    // Determine which ones are currently selected
                    const selectedValues = phaseState.hardStops.filter(qId => answers[qId] && answers[qId].value === 'yes');

                    container.innerHTML = `
                    <div class="question-section">
                        <div class="questions-list" id="questionsList">
                            <question-block title="Does any of this apply to your project?" badge="Select all that apply">
                                <p style="text-align:center; font-size:14px; color:#777; margin-bottom:28px;">Select all that apply — if none apply, just click <strong>Continue</strong>.</p>
                                <checkbox-question 
                                    qid="hardstops" 
                                    options='${JSON.stringify(checkboxOptions).replace(/'/g, "&apos;")}'
                                    selected='${JSON.stringify(selectedValues)}'
                                ></checkbox-question>
                            </question-block>
                        </div>
                    </div>
                    `;

                    // Listen to the generic component event instead of attaching clicks to individual rows
                    const checkboxElement = container.querySelector('checkbox-question');
                    checkboxElement.addEventListener('answer-selected', (e) => {
                        const selectedQids = e.detail.value; // Array of selected qIds

                        phaseState.hardStops.forEach(qId => {
                            if (selectedQids.includes(qId)) {
                                // Add to answers if selected
                                const q = questions[qId];
                                const yesOption = q.options.find(o => o.value === 'yes');
                                answers[qId] = {
                                    question: q.question,
                                    answer: yesOption ? yesOption.text : 'Yes',
                                    value: 'yes'
                                };
                            } else {
                                // Remove if unselected
                                delete answers[qId];
                                if (stopState && stopState.fromQuestion === qId) {
                                    stopState = null;
                                }
                            }
                        });

                        updateContinueState();
                    });

                    updateContinueState();
                    return;
                }

                // Standard rendering for non-hard-stop questions (or groups with no hard-stops)
                container.innerHTML = `
                <div class="question-section">
                    <div class="questions-list" id="questionsList"></div>
                </div>
            `;

                const list = document.getElementById('questionsList');

                // Determine active question - handle accordion state for EXT/CONV
                let activeId;
                if ((groupId === 'EXT' || groupId === 'CONV') && accordionState[groupId]) {
                    const state = accordionState[groupId];
                    if (state.mode === 'ps' && state.psGroup) {
                        // In PS mode - active question is the PS question
                        const ps = groups[state.psGroup];
                        if (ps && ps.questionIds[state.psIndex]) {
                            activeId = ps.questionIds[state.psIndex];
                        } else {
                            activeId = state.expandedPT || g.questionIds[state.activePTIndex] || g.questionIds[0];
                        }
                    } else {
                        // In PT mode - active question is the PT question
                        activeId = g.questionIds[state.activePTIndex] || currentQuestionId || g.questionIds[0];
                    }
                } else {
                    // Normal mode - use group active question or current question
                    activeId = groupActiveQuestion[g.id] || currentQuestionId || g.questionIds[0];
                }

                groupActiveQuestion[g.id] = activeId;
                currentQuestionId = activeId;

                // Use non-hard-stop questions if we're past hard-stop phase, otherwise use all questions
                // For EXT/CONV, always use all questions as they handle hard-stops in normal flow
                const idsToRender = (groupId === 'EXT' || groupId === 'CONV')
                    ? g.questionIds
                    : (phaseState.phase === 'nonHardStop' && phaseState.nonHardStops.length > 0
                        ? phaseState.nonHardStops
                        : g.questionIds);

                for (const qId of idsToRender) {
                    const q = questions[qId];
                    if (!q) continue;

                    // For EXT/CONV, check if this is a PT question that should be inactive due to accordion
                    let isActive = qId === activeId;
                    let hasAccordion = false;

                    if ((groupId === 'EXT' || groupId === 'CONV') && accordionState[groupId]) {
                        const state = accordionState[groupId];
                        if (state.mode === 'ps') {
                            // In PS mode - the expanded PT card should NOT be inactive (to allow accordion clicks)
                            if (qId === state.expandedPT) {
                                isActive = true; // Keep card active so accordion is clickable
                                hasAccordion = true; // Mark that this card has an accordion
                            } else if (state.expandedPT && qId !== state.expandedPT) {
                                isActive = false; // Other PTs are inactive
                            }
                        } else {
                            // In PT mode - normal active/inactive logic
                            isActive = qId === activeId;
                        }
                    }

                    const card = document.createElement('div');
                    card.className = 'q-block-wrapper' + (isActive ? ' active' : ' inactive');
                    if (hasAccordion) {
                        card.classList.add('has-accordion');
                    }
                    card.dataset.id = qId;

                    const hasMultipleOptions = q.options && q.options.length > 2;
                    const isSelectedVal = answers[qId] ? answers[qId].value : null;

                    // We determine the counter for the badge based on where this question sits in its group
                    const isArrayPosition = renderIds.indexOf(qId);
                    const qBadge = isArrayPosition !== -1 ? `Question ${isArrayPosition + 1} of ${renderIds.length}` : '';

                    let innerComponent = '';
                    if (hasMultipleOptions) {
                        innerComponent = `
                            <radio-question 
                                qid="${qId}" 
                                options='${JSON.stringify(q.options).replace(/'/g, "&apos;")}'
                                ${isSelectedVal ? `selected="${isSelectedVal}"` : ''}
                            ></radio-question>
                        `;
                    } else {
                        innerComponent = `
                            <yes-no-question 
                                qid="${qId}" 
                                text="${q.question}" 
                                ${isSelectedVal ? `selected="${isSelectedVal}"` : ''}
                            ></yes-no-question>
                        `;
                    }

                    // Wrap in QuestionBlock. Note that we don't pass `title` since we want 
                    // the inner component (yes-no-question or radio-question) to handle the main text visually 
                    // or we can pass the title to QuestionBlock. Wait, in v5 the Title is in the QuestionBlock!

                    const blockTitle = hasMultipleOptions ? q.question : 'Please confirm';
                    // If it's yes/no, the yes-no-question row has the question text as a label. 
                    // So we give the block a generic title. If multi-option, the block gets the title.

                    card.innerHTML = `
                        <question-block label="${q.category || ''}" title="${blockTitle}" badge="${qBadge}">
                            ${innerComponent}
                            <div class="guidance-wrapper" id="guidance-${qId}"></div>
                            <div class="accordion-slot" id="accordion-${qId}"></div>
                        </question-block>
                    `;

                    list.appendChild(card);

                    // Listen to the generic answer-selected events bubbling up
                    card.addEventListener('answer-selected', function (e) {
                        if (!isActive) return;

                        const { qid, value } = e.detail;
                        const option = q.options.find(o => o.value === value);

                        if (!value) {
                            delete answers[qid];
                            clearInlineGuidance(qid);
                            if (stopState && stopState.fromQuestion === qid) {
                                stopState = null;
                            }
                            updateContinueState();
                            return;
                        }

                        answers[qId] = {
                            question: q.question,
                            answer: option ? option.text : (value === 'yes' ? 'Yes' : 'No'),
                            value: value
                        };

                        const hasGuidance = (option && option.guidance) || q.guidance;
                        if (hasGuidance) {
                            const guidanceText = (option && option.guidance) || q.guidance;
                            showInlineGuidance(qId, guidanceText, !!(option && option.stop));
                        } else {
                            clearInlineGuidance(qId);
                        }

                        if (option && option.stop) {
                            stopState = {
                                result: option.result,
                                guidance: option.guidance || q.guidance,
                                fromQuestion: qId
                            };
                            updateContinueState();
                            return; // Stop condition blocks auto-advance
                        } else {
                            if (stopState && stopState.fromQuestion === qId) {
                                stopState = null;
                            }
                        }

                        // Specific accordion state routing for EXT/CONV groups
                        if (groupId === 'EXT' || groupId === 'CONV') {
                            const psGroupId = ptToPs[qId];
                            const g = groups[groupId];
                            const isLastPT = g.questionIds.indexOf(qId) === g.questionIds.length - 1;

                            if (value === 'yes' && psGroupId) {
                                const state = accordionState[groupId];
                                state.mode = 'ps';
                                state.expandedPT = qId;
                                state.psGroup = psGroupId;
                                state.psIndex = 0;
                                state.activePTIndex = g.questionIds.indexOf(qId);
                                groupActiveQuestion[groupId] = qId;

                                currentQuestionId = groups[psGroupId].questionIds[0] || qId;
                                renderGroup(groupId);
                                updateStepIndicators();
                                updateProgress();
                                updateContinueState();
                                return;
                            } else if (value === 'no' && psGroupId) {
                                const state = accordionState[groupId];
                                if (state.mode === 'ps' && state.expandedPT === qId) {
                                    state.mode = 'pt';
                                    state.expandedPT = null;
                                    state.psGroup = null;
                                    for (const psId of groups[psGroupId].questionIds) {
                                        delete answers[psId];
                                    }
                                }
                            }

                            if (isLastPT && isPTGroupComplete(groupId)) {
                                updateContinueState();
                                return;
                            }
                        }

                        const needsGroupChange = checkIfNeedsGroupChange(qId, option);
                        if (needsGroupChange) {
                            updateContinueState();
                            return;
                        }

                        updateContinueState();

                        if (hasGuidance) {
                            setTimeout(() => { goNext(); }, 1500);
                        } else {
                            setTimeout(() => { goNext(); }, 100);
                        }
                    });

                    if (!isActive && !hasAccordion) {
                        const cardElement = card.querySelector('radio-question') || card.querySelector('yes-no-question');
                        if (cardElement) {
                            cardElement.style.pointerEvents = 'none';
                            cardElement.style.opacity = '0.5';
                        }
                    }
                }

                // Render accordion PS set inside EXT/CONV when active PT is answered "yes"
                if (g.id === 'EXT' || g.id === 'CONV') {
                    renderAccordionIfNeeded(g.id);
                }

                // Use event delegation - attach listener to the list container
                // Since innerHTML recreates the list, we need to reattach, but using delegation is safer
                list.addEventListener('click', handleGroupedToggleClick);
                updateContinueState();
            }

            function renderAccordionIfNeeded(groupId) {
                const g = groups[groupId];
                const state = accordionState[groupId];
                if (!state) return;

                // Determine active PT index / id
                const activePTId = g.questionIds[state.activePTIndex] || g.questionIds[0];
                groupActiveQuestion[groupId] = activePTId;

                // Only expand if active PT answered yes and has a PS set
                const ans = answers[activePTId];
                const psGroupId = ptToPs[activePTId];
                const shouldExpand = ans && ans.value === 'yes' && !!psGroupId;

                // If not expanding, set currentQuestionId to PT
                if (!shouldExpand) {
                    currentQuestionId = activePTId;
                }

                // Clear all accordion slots first
                for (const ptId of g.questionIds) {
                    const slot = document.getElementById(`accordion-${ptId}`);
                    if (slot) slot.innerHTML = '';
                }

                if (!shouldExpand) {
                    state.mode = 'pt';
                    state.expandedPT = null;
                    state.psGroup = null;
                    state.psIndex = 0;
                    return;
                }

                state.mode = 'ps';
                state.expandedPT = activePTId;
                state.psGroup = psGroupId;

                const ps = groups[psGroupId];
                if (!ps) return;

                // Ensure psIndex is valid and set to first question if not set
                if (state.psIndex < 0 || state.psIndex >= ps.questionIds.length || state.psIndex === undefined) {
                    state.psIndex = 0;
                }
                const activeSubId = ps.questionIds[state.psIndex];

                // Update currentQuestionId to the active PS question so it's recognized as active
                currentQuestionId = activeSubId;

                const slot = document.getElementById(`accordion-${activePTId}`);
                if (!slot) {
                    console.warn(`Accordion slot not found for PT: ${activePTId}`);
                    return;
                }

                // Map PS questions into options for the nested CheckboxQuestion
                const checkboxOptions = ps.questionIds.map(qid => {
                    const qq = questions[qid];
                    return {
                        text: qq.question,
                        value: qid,
                        description: qq.guidance || ''
                    };
                });

                const selectedValues = ps.questionIds.filter(qid => answers[qid] && answers[qid].value === 'yes');

                slot.innerHTML = `
                    <accordion-question 
                        qid="${psGroupId}" 
                        text="${ps.title}" 
                        description="Select specifically what applies to your project."
                        value="expanded"
                        expanded
                    >
                        <div style="padding-top: 12px;">
                            <checkbox-question 
                                qid="accordion-checkbox-${psGroupId}" 
                                options='${JSON.stringify(checkboxOptions).replace(/'/g, "&apos;")}'
                                selected='${JSON.stringify(selectedValues)}'
                            ></checkbox-question>
                        </div>
                    </accordion-question>
                `;

                // Handle changes to the nested checkboxes
                setTimeout(() => {
                    const checkboxElement = slot.querySelector('checkbox-question');
                    if (!checkboxElement) return;

                    checkboxElement.addEventListener('answer-selected', (e) => {
                        const selectedQids = e.detail.value;

                        ps.questionIds.forEach(qid => {
                            if (selectedQids.includes(qid)) {
                                const qq = questions[qid];
                                const yesOpt = qq.options.find(o => o.value === 'yes');
                                answers[qid] = {
                                    question: qq.question,
                                    answer: yesOpt ? yesOpt.text : 'Yes',
                                    value: 'yes'
                                };
                            } else {
                                delete answers[qid];
                            }
                        });

                        updateContinueState();
                    });
                }, 0);
            }
            // Check if answering this question requires moving to a different group/screen
            function checkIfNeedsGroupChange(qId, option) {
                if (!option || !option.next || option.next.length === 0) {
                    // No explicit next path - check if it's the last question in group
                    const g = groups[currentGroupId];
                    const idxInGroup = g.questionIds.indexOf(qId);
                    if (idxInGroup >= 0 && idxInGroup === g.questionIds.length - 1) {
                        // Last question in group - check if group is complete
                        if (currentGroupId === 'EXT' || currentGroupId === 'CONV' || currentGroupId === 'DEM') {
                            return isPTGroupComplete(currentGroupId);
                        }
                        // For other groups, if it's the last question, we'll move to next group
                        return true;
                    }
                    return false;
                }

                const nextQId = option.next[0];
                const g = groups[currentGroupId];

                // If next question is in same group, no group change needed
                if (g.questionIds.includes(nextQId)) {
                    return false;
                }

                // Next question is in different group - group change needed
                return true;
            }

            function updateContinueState() {
                const g = groups[currentGroupId];
                const nextBtn = document.getElementById('nextBtn');

                // Special handling for LG and SITE groups - always enable Continue button
                // User can proceed even if nothing selected (moves to next group)
                // or if something selected (shows results with stop for LG, or shows guidance for SITE)
                if (currentGroupId === 'LG' || currentGroupId === 'SITE') {
                    nextBtn.disabled = false;
                    return;
                }

                // Handle hard-stop phase - always enable Continue button
                // User can proceed even if nothing selected (moves to non-hard-stop phase)
                // or if something selected (shows results with stop)
                // Skip for EXT/CONV as they don't use hard-stop phase
                if (currentGroupId !== 'EXT' && currentGroupId !== 'CONV' && isInHardStopPhase(currentGroupId)) {
                    nextBtn.disabled = false;
                    return;
                }

                // If there's a stop condition, enable Continue button
                if (stopState) {
                    nextBtn.disabled = false;
                    return;
                }

                // Accordion PS path (EXT/CONV): PS questions are now multi-select like LG/SITE
                // Always enable Continue button - user can proceed even if nothing selected
                if ((currentGroupId === 'EXT' || currentGroupId === 'CONV') && accordionState[currentGroupId]?.mode === 'ps') {
                    const state = accordionState[currentGroupId];
                    if (!state || !state.psGroup) {
                        nextBtn.disabled = true;
                        return;
                    }

                    const ps = groups[state.psGroup];
                    if (!ps || !ps.questionIds || ps.questionIds.length === 0) {
                        nextBtn.disabled = true;
                        return;
                    }

                    // Always enable Continue for PS multi-select (like LG/SITE)
                    // If selections made, will check for stops in goNext()
                    // If no selections, will mark all as "no" and continue
                    nextBtn.disabled = false;
                    return;
                }

                const activeId = groupActiveQuestion[g.id] || g.questionIds[0];
                const q = questions[activeId];
                const ans = answers[activeId];

                if (!ans) {
                    nextBtn.disabled = true;
                    return;
                }

                const opt = q.options.find(o => o.value === ans.value);

                // Check if we need to move to next group
                if (checkIfNeedsGroupChange(activeId, opt)) {
                    // Need to move to next group - enable Continue
                    nextBtn.disabled = false;
                    return;
                }

                // For questions with visual option cards (multiple options), always enable Continue
                // User must click Continue to proceed
                if (q.options && q.options.length > 2) {
                    nextBtn.disabled = false;
                    return;
                }

                // Within same group - disable Continue (auto-advance will happen)
                nextBtn.disabled = true;
            }

            function showInlineGuidance(questionId, text, isStop = false) {
                const wrapper = document.getElementById(`guidance-${questionId}`);
                if (!wrapper) return;
                const severityClass = isStop ? 'guidance-alert--stop' : '';
                wrapper.innerHTML = `
                <div class="guidance-alert ${severityClass}">
                    <div class="guidance-icon">${isStop ? '⚠️' : 'ℹ️'}</div>
                    <div class="guidance-text">${text}</div>
                </div>
            `;
            }

            function clearInlineGuidance(questionId) {
                const wrapper = document.getElementById(`guidance-${questionId}`);
                if (wrapper) wrapper.innerHTML = '';
            }

            function groupHasStopCondition(groupId) {
                const g = groups[groupId];
                for (const qId of g.questionIds) {
                    const q = questions[qId];
                    const ans = answers[qId];
                    if (!q || !ans) continue;
                    const opt = q.options.find(o => o.value === ans.value);
                    if (opt && opt.stop) return { qId, opt, q };
                }
                return null;
            }

            // Check if a PT group is complete (all PTs and PS questions answered, no stops)
            function isPTGroupComplete(groupId) {
                const g = groups[groupId];
                if (!g || (groupId !== 'EXT' && groupId !== 'CONV' && groupId !== 'DEM')) {
                    return false;
                }

                // Check if all PTs are answered
                const allPTsAnswered = g.questionIds.every(ptId => answers[ptId]);
                if (!allPTsAnswered) return false;

                // Check if any PT has a stop
                const hasPTStop = g.questionIds.some(ptId => {
                    const ptQ = questions[ptId];
                    const ptAns = answers[ptId];
                    if (!ptQ || !ptAns) return false;
                    const ptOpt = ptQ.options.find(o => o.value === ptAns.value);
                    return ptOpt && ptOpt.stop;
                });
                if (hasPTStop) return false;

                // Check all PS answers (for EXT and CONV only)
                if (groupId === 'EXT' || groupId === 'CONV') {
                    for (const ptId of g.questionIds) {
                        const psGroupId = ptToPs[ptId];
                        if (psGroupId && answers[ptId]?.value === 'yes') {
                            const ps = groups[psGroupId];
                            if (ps) {
                                // Check if all PS questions are answered
                                const psAllAnswered = ps.questionIds.every(psId => answers[psId]);
                                if (!psAllAnswered) return false;

                                // Check if any PS has a stop
                                const psHasStop = ps.questionIds.some(psId => {
                                    const psQ = questions[psId];
                                    const psAns = answers[psId];
                                    if (!psQ || !psAns) return false;
                                    const psOpt = psQ.options.find(o => o.value === psAns.value);
                                    return psOpt && psOpt.stop;
                                });
                                if (psHasStop) return false;
                            }
                        }
                    }
                }

                return true;
            }

            // Move to next PT group in sequence: EXT → CONV → DEM → Results
            function moveToNextPTGroup() {
                flow = computeFlow();
                if (currentGroupId === 'EXT') {
                    // Always try to move to CONV first (PT10), regardless of whether PG4 was answered
                    // If PG4 hasn't been answered yet, we still move to CONV so user can answer it
                    // Only skip CONV if PG4 was explicitly answered "No"
                    const pg4Answered = answers.PG4;
                    const pg4No = pg4Answered && answers.PG4.value === 'no';

                    if (!pg4No) {
                        // PG4 not answered yet or answered "Yes" - move to CONV
                        // Check if CONV is in flow, or add it temporarily if PG4 not answered
                        if (flow.includes('CONV')) {
                            currentGroupIndex = flow.indexOf('CONV');
                        } else {
                            // PG4 not answered yet - add CONV to flow temporarily and navigate to it
                            flow.push('CONV');
                            currentGroupIndex = flow.indexOf('CONV');
                        }
                        currentGroupId = 'CONV';
                        currentQuestionId = 'PT10';
                        groupActiveQuestion['CONV'] = 'PT10';
                        const convState = accordionState['CONV'];
                        convState.mode = 'pt';
                        convState.activePTIndex = 0;
                        convState.expandedPT = null;
                        convState.psGroup = null;
                        convState.psIndex = 0;
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        return true;
                    } else if (flow.includes('DEM')) {
                        // PG4 was "No", but DEM is in flow (user answered PG5: Yes)
                        currentGroupIndex = flow.indexOf('DEM');
                        currentGroupId = 'DEM';
                        currentQuestionId = 'PT17';
                        groupActiveQuestion['DEM'] = 'PT17';
                        // Add to history
                        questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        return true;
                    } else {
                        // PG4 was "No" and no DEM - check if PG5 was answered
                        const pg5Answered = answers.PG5;
                        const pg5No = pg5Answered && answers.PG5.value === 'no';
                        if (pg5No) {
                            // Both PG4 and PG5 are "No" - all project types completed, show results
                            showResults();
                            return true;
                        } else {
                            // PG5 not answered yet - move to DEM so user can answer it
                            flow.push('DEM');
                            currentGroupIndex = flow.indexOf('DEM');
                            currentGroupId = 'DEM';
                            currentQuestionId = 'PT17';
                            groupActiveQuestion['DEM'] = 'PT17';
                            // Add to history
                            questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                            renderGroup(currentGroupId);
                            updateStepIndicators();
                            updateProgress();
                            return true;
                        }
                    }
                } else if (currentGroupId === 'CONV') {
                    // Moving from CONV - check DEM
                    const pg5Answered = answers.PG5;
                    const pg5No = pg5Answered && answers.PG5.value === 'no';

                    if (!pg5No) {
                        // PG5 not answered yet or answered "Yes" - move to DEM
                        if (flow.includes('DEM')) {
                            currentGroupIndex = flow.indexOf('DEM');
                        } else {
                            // PG5 not answered yet - add DEM to flow temporarily and navigate to it
                            flow.push('DEM');
                            currentGroupIndex = flow.indexOf('DEM');
                        }
                        currentGroupId = 'DEM';
                        currentQuestionId = 'PT17';
                        groupActiveQuestion['DEM'] = 'PT17';
                        // Add to history
                        questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        return true;
                    } else {
                        // PG5 was "No" - all project types completed, show results
                        showResults();
                        return true;
                    }
                } else if (currentGroupId === 'DEM') {
                    // Moving from DEM - all PT groups completed, show results
                    showResults();
                    return true;
                }
                return false;
            }

            function goNext() {
                clearTimeout(autoAdvanceTimer); // Cancel any pending auto-advance to prevent race conditions
                // Check if we're in hard-stop phase for current group (except LG/SITE/EXT/CONV which are handled separately)
                // EXT/CONV skip hard-stop phase as they have accordion PS sub-questions
                if (currentGroupId !== 'LG' && currentGroupId !== 'SITE' && currentGroupId !== 'EXT' && currentGroupId !== 'CONV' && isInHardStopPhase(currentGroupId)) {
                    const phaseState = groupPhaseState[currentGroupId];
                    const selectedHardStops = getSelectedHardStops(currentGroupId);

                    if (selectedHardStops.length > 0) {
                        // Hard stop triggered - show results
                        const firstSelected = selectedHardStops[0];
                        const q = questions[firstSelected];
                        const yesOption = q.options.find(o => o.value === 'yes' && o.stop);

                        if (yesOption) {
                            stopState = {
                                result: yesOption.result,
                                guidance: yesOption.guidance || q.guidance,
                                fromQuestion: firstSelected
                            };
                        }

                        showResults();
                        return;
                    } else {
                        // No hard stops selected - mark all as "no" and move to non-hard-stop phase
                        markHardStopsAsNo(currentGroupId);
                        moveToNonHardStopPhase(currentGroupId);
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        updateContinueState();
                        return;
                    }
                }

                // Special handling for LG group
                if (currentGroupId === 'LG') {
                    const lgQuestions = groups['LG'].questionIds;
                    const selectedQuestions = lgQuestions.filter(qId => answers[qId] && answers[qId].value === 'yes');

                    if (selectedQuestions.length > 0) {
                        // At least one LG question was selected - trigger stop and show results
                        const firstSelected = selectedQuestions[0];
                        const q = questions[firstSelected];
                        const yesOption = q.options.find(o => o.value === 'yes');

                        if (yesOption && yesOption.stop) {
                            stopState = {
                                result: yesOption.result,
                                guidance: yesOption.guidance || q.guidance,
                                fromQuestion: firstSelected
                            };
                        }

                        showResults();
                        return;
                    } else {
                        // No selections - mark all LG questions as "no" and move to next group (PG)
                        // This ensures the flow continues properly
                        for (const qId of lgQuestions) {
                            if (!answers[qId]) {
                                const q = questions[qId];
                                const noOption = q.options.find(o => o.value === 'no');
                                if (noOption) {
                                    answers[qId] = {
                                        question: q.question,
                                        answer: noOption.text,
                                        value: 'no'
                                    };
                                }
                            }
                        }

                        // Move to next group
                        flow = computeFlow();
                        const lgIdx = flow.indexOf('LG');
                        if (lgIdx >= 0 && lgIdx < flow.length - 1) {
                            currentGroupIndex = lgIdx + 1;
                            currentGroupId = flow[currentGroupIndex];
                            const nextGroup = groups[currentGroupId];
                            currentQuestionId = nextGroup ? nextGroup.questionIds[0] : null;
                            if (currentQuestionId) {
                                groupActiveQuestion[currentGroupId] = currentQuestionId;
                                questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                            }
                            renderGroup(currentGroupId);
                            updateStepIndicators();
                            updateProgress();
                            updateContinueState();
                            return;
                        } else {
                            // No next group found - show results
                            showResults();
                            return;
                        }
                    }
                }

                // Special handling for SITE group
                if (currentGroupId === 'SITE') {
                    const siteQuestions = groups['SITE'].questionIds;
                    const selectedQuestions = siteQuestions.filter(qId => answers[qId] && answers[qId].value === 'yes');

                    // Mark all questions - selected as "yes", unselected as "no"
                    for (const qId of siteQuestions) {
                        if (!answers[qId]) {
                            const q = questions[qId];
                            const noOption = q.options.find(o => o.value === 'no');
                            if (noOption) {
                                answers[qId] = {
                                    question: q.question,
                                    answer: noOption.text,
                                    value: 'no'
                                };
                            }
                        }
                    }

                    // Move to next group (should be EXT, CONV, or DEM based on PG answers)
                    flow = computeFlow();
                    const siteIdx = flow.indexOf('SITE');
                    if (siteIdx >= 0 && siteIdx < flow.length - 1) {
                        currentGroupIndex = siteIdx + 1;
                        currentGroupId = flow[currentGroupIndex];
                        const nextGroup = groups[currentGroupId];
                        currentQuestionId = nextGroup ? nextGroup.questionIds[0] : null;
                        if (currentQuestionId) {
                            groupActiveQuestion[currentGroupId] = currentQuestionId;
                            questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                        }
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        updateContinueState();
                        return;
                    } else {
                        // No next group found - show results
                        showResults();
                        return;
                    }
                }

                // If there's a stop condition, show results immediately
                if (stopState) {
                    showResults();
                    return;
                }

                const g = groups[currentGroupId];
                // Accordion PS path (EXT/CONV): PS questions are now multi-select like LG/SITE
                if ((currentGroupId === 'EXT' || currentGroupId === 'CONV') && accordionState[currentGroupId]?.mode === 'ps') {
                    const state = accordionState[currentGroupId];
                    if (!state || !state.psGroup) {
                        // Invalid state - reset to PT mode
                        if (state) {
                            state.mode = 'pt';
                            state.expandedPT = null;
                            state.psGroup = null;
                            state.psIndex = 0;
                        }
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        updateContinueState();
                        return;
                    }

                    const ps = groups[state.psGroup];
                    if (!ps || !ps.questionIds || ps.questionIds.length === 0) {
                        // Invalid PS group - reset to PT mode
                        state.mode = 'pt';
                        state.expandedPT = null;
                        state.psGroup = null;
                        state.psIndex = 0;
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        updateContinueState();
                        return;
                    }

                    // Check if any PS question has a stop condition
                    const selectedPSQuestions = ps.questionIds.filter(psId => answers[psId] && answers[psId].value === 'yes');
                    if (selectedPSQuestions.length > 0) {
                        // Check for stop conditions
                        const hasPSStop = selectedPSQuestions.some(psId => {
                            const psQ = questions[psId];
                            const psAns = answers[psId];
                            if (!psQ || !psAns) return false;
                            const psOpt = psQ.options.find(o => o.value === 'yes');
                            return psOpt && psOpt.stop;
                        });

                        if (hasPSStop) {
                            // Find first stop
                            const stopPSId = selectedPSQuestions.find(psId => {
                                const psQ = questions[psId];
                                const psAns = answers[psId];
                                if (!psQ || !psAns) return false;
                                const psOpt = psQ.options.find(o => o.value === 'yes');
                                return psOpt && psOpt.stop;
                            });

                            if (stopPSId) {
                                const psQ = questions[stopPSId];
                                const psOpt = psQ.options.find(o => o.value === 'yes' && o.stop);
                                if (psOpt) {
                                    stopState = {
                                        result: psOpt.result,
                                        guidance: psOpt.guidance || psQ.guidance,
                                        fromQuestion: stopPSId
                                    };
                                    showResults();
                                    return;
                                }
                            }
                        }
                    }

                    // No stops selected - mark unselected PS questions as "no" and move to next PT
                    // Mark all unselected PS questions as "no"
                    ps.questionIds.forEach(psId => {
                        if (!answers[psId]) {
                            const psQ = questions[psId];
                            const noOption = psQ.options.find(o => o.value === 'no');
                            if (noOption) {
                                answers[psId] = {
                                    question: psQ.question,
                                    answer: noOption.text,
                                    value: 'no'
                                };
                            }
                        }
                    });

                    // Collapse accordion and move to next PT
                    state.mode = 'pt';
                    state.expandedPT = null;
                    state.psGroup = null;
                    state.psIndex = 0;

                    // Find next PT in the group
                    const nextPtIdx = state.activePTIndex + 1;
                    if (nextPtIdx < g.questionIds.length) {
                        state.activePTIndex = nextPtIdx;
                        groupActiveQuestion[currentGroupId] = g.questionIds[nextPtIdx];
                        currentQuestionId = g.questionIds[nextPtIdx];
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        updateContinueState();
                        return;
                    } else {
                        // No more PTs in this group - check if group is complete
                        if (isPTGroupComplete(currentGroupId)) {
                            if (moveToNextPTGroup()) {
                                return;
                            }
                        } else {
                            // Group not complete - show results
                            showResults();
                            return;
                        }
                    }
                }

                const activeId = groupActiveQuestion[g.id] || g.questionIds[0];
                const q = questions[activeId];
                const ans = answers[activeId];
                const opt = q.options.find(o => o.value === ans.value);

                // PT accordion: if active PT is yes and has PS set, ensure accordion is open
                // (This is handled in handleGroupedToggleClick now, but keep as fallback)
                if ((currentGroupId === 'EXT' || currentGroupId === 'CONV') && ptToPs[activeId] && ans && ans.value === 'yes') {
                    const state = accordionState[currentGroupId];
                    if (state.mode !== 'ps' || state.expandedPT !== activeId) {
                        state.mode = 'ps';
                        state.expandedPT = activeId;
                        state.psGroup = ptToPs[activeId];
                        state.psIndex = 0;
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        return;
                    }
                }

                // PT accordion: handle PT "No" answers - check if next path points to another PT or outside group
                if ((currentGroupId === 'EXT' || currentGroupId === 'CONV') && opt && opt.next && opt.next.length > 0) {
                    const nextQId = opt.next[0];
                    const state = accordionState[currentGroupId];

                    // If next question is another PT in the same group, advance to it
                    if (g.questionIds.includes(nextQId)) {
                        const nextPtIdx = g.questionIds.indexOf(nextQId);
                        state.activePTIndex = nextPtIdx;
                        state.mode = 'pt';
                        state.expandedPT = null;
                        state.psGroup = null;
                        state.psIndex = 0;
                        groupActiveQuestion[currentGroupId] = nextQId;
                        currentQuestionId = nextQId;
                        // Add to history
                        questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        return;
                    } else {
                        // Next question is outside this group (e.g., T1) - check if group is complete first
                        const idxInGroup = g.questionIds.indexOf(activeId);
                        const isLastPT = idxInGroup === g.questionIds.length - 1;

                        // Check if target is SITE (T1) and already processed
                        flow = computeFlow();
                        const targetGroup = Object.values(groups).find(gr => gr.questionIds.includes(nextQId));
                        if (targetGroup && targetGroup.id === 'SITE') {
                            const targetIdx = flow.indexOf(targetGroup.id);
                            // If SITE already processed, ALWAYS check if current group is complete first
                            if (currentGroupIndex >= targetIdx || targetIdx < 0) {
                                // SITE already processed - check if current group is complete
                                // This is the key: if group is complete, move to next group, don't try to go to T1
                                if (isPTGroupComplete(currentGroupId)) {
                                    // Group is complete - move to next PT group
                                    state.mode = 'pt';
                                    state.expandedPT = null;
                                    state.psGroup = null;
                                    state.psIndex = 0;
                                    if (moveToNextPTGroup()) {
                                        return;
                                    }
                                } else if (isLastPT) {
                                    // Last PT but group not complete - this means some PTs or PS questions aren't answered
                                    // Show results as group is incomplete
                                    showResults();
                                    return;
                                } else {
                                    // Not last PT - continue with next PT in group (shouldn't happen if logic is correct)
                                    state.mode = 'pt';
                                    state.expandedPT = null;
                                    state.psGroup = null;
                                    state.psIndex = 0;
                                    const nextPtIdx = idxInGroup + 1;
                                    if (nextPtIdx < g.questionIds.length) {
                                        state.activePTIndex = nextPtIdx;
                                        groupActiveQuestion[currentGroupId] = g.questionIds[nextPtIdx];
                                        currentQuestionId = g.questionIds[nextPtIdx];
                                        renderGroup(currentGroupId);
                                        updateStepIndicators();
                                        updateProgress();
                                        return;
                                    } else {
                                        // No more PTs but group not complete - show results
                                        showResults();
                                        return;
                                    }
                                }
                            }
                        }

                        // If this is the last PT in the group, check if group is complete
                        if (isLastPT) {
                            if (isPTGroupComplete(currentGroupId)) {
                                state.mode = 'pt';
                                state.expandedPT = null;
                                state.psGroup = null;
                                state.psIndex = 0;
                                if (moveToNextPTGroup()) {
                                    return;
                                }
                            }
                        }

                        // Group not complete or target is not SITE - exit accordion and follow path
                        state.mode = 'pt';
                        state.expandedPT = null;
                        state.psGroup = null;
                        state.psIndex = 0;
                        if (targetGroup) {
                            const targetIdx = flow.indexOf(targetGroup.id);
                            if (targetIdx >= 0) {
                                // Target group is in flow - navigate to it
                                currentGroupIndex = targetIdx;
                                currentGroupId = targetGroup.id;
                                currentQuestionId = nextQId;
                                groupActiveQuestion[targetGroup.id] = nextQId;
                                // Add to history
                                questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                                renderGroup(currentGroupId);
                                updateStepIndicators();
                                updateProgress();
                                return;
                            } else {
                                // Target group not in flow - this shouldn't happen for PT groups
                                // Don't show catch-all here - let normal flow continue
                                // Catch-all should only be checked at the end of PG group, not during PT navigation
                            }
                        }
                    }
                }

                // Check for explicit next path that points outside current group
                if (opt && opt.next && opt.next.length > 0) {
                    const nextQId = opt.next[0];
                    // If next question is not in current group, try to navigate to it
                    if (!g.questionIds.includes(nextQId)) {
                        flow = computeFlow();
                        const targetGroup = Object.values(groups).find(gr => gr.questionIds.includes(nextQId));
                        if (targetGroup) {
                            const targetIdx = flow.indexOf(targetGroup.id);
                            // If target is SITE and we're already past it in the flow, check group completion
                            // (SITE should only appear once, before project features)
                            if (targetGroup.id === 'SITE' && currentGroupIndex > targetIdx) {
                                // We've already been to SITE - check if current PT group is complete
                                if ((currentGroupId === 'EXT' || currentGroupId === 'CONV' || currentGroupId === 'DEM')) {
                                    const idxInGroup = g.questionIds.indexOf(activeId);
                                    const isLastPT = idxInGroup === g.questionIds.length - 1;

                                    // Always check group completion when pointing to already-processed SITE
                                    if (isPTGroupComplete(currentGroupId)) {
                                        // Group is complete - move to next PT group
                                        if (currentGroupId === 'EXT' || currentGroupId === 'CONV') {
                                            const state = accordionState[currentGroupId];
                                            if (state) {
                                                state.mode = 'pt';
                                                state.expandedPT = null;
                                                state.psGroup = null;
                                                state.psIndex = 0;
                                            }
                                        }
                                        if (moveToNextPTGroup()) {
                                            return;
                                        }
                                    } else if (isLastPT) {
                                        // Last PT but group not complete - this shouldn't happen if all PTs are answered
                                        // But show results if group is incomplete
                                        showResults();
                                        return;
                                    } else {
                                        // Not last PT - continue with next PT in group
                                        const nextPtIdx = idxInGroup + 1;
                                        if (nextPtIdx < g.questionIds.length) {
                                            if (currentGroupId === 'EXT' || currentGroupId === 'CONV') {
                                                const state = accordionState[currentGroupId];
                                                if (state) {
                                                    state.activePTIndex = nextPtIdx;
                                                    state.mode = 'pt';
                                                    state.expandedPT = null;
                                                    state.psGroup = null;
                                                    state.psIndex = 0;
                                                }
                                            }
                                            groupActiveQuestion[currentGroupId] = g.questionIds[nextPtIdx];
                                            currentQuestionId = g.questionIds[nextPtIdx];
                                            // Add to history
                                            questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                                            renderGroup(currentGroupId);
                                            updateStepIndicators();
                                            updateProgress();
                                            return;
                                        }
                                    }
                                } else {
                                    // Not a PT group - show results
                                    showResults();
                                    return;
                                }
                            }
                            if (targetIdx >= 0) {
                                // Target group is in flow - navigate to it
                                currentGroupIndex = targetIdx;
                                currentGroupId = targetGroup.id;
                                currentQuestionId = nextQId;
                                groupActiveQuestion[targetGroup.id] = nextQId;
                                // Add to history
                                questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                                renderGroup(currentGroupId);
                                updateStepIndicators();
                                updateProgress();
                                return;
                            } else {
                                // Target group not in flow - this shouldn't happen for PT groups
                                // Don't show catch-all here - let normal flow continue
                                // Catch-all should only be checked at the end of PG group, not during PT navigation
                            }
                        }
                    }
                }

                // Decide next question within same group (respecting explicit next if provided)
                let nextQuestionId = null;
                if (opt && opt.next && opt.next.length > 0) {
                    const candidate = opt.next[0];
                    if (g.questionIds.includes(candidate)) {
                        nextQuestionId = candidate;
                    }
                }
                if (!nextQuestionId) {
                    const idxInGroup = g.questionIds.indexOf(activeId);
                    if (idxInGroup >= 0 && idxInGroup < g.questionIds.length - 1) {
                        nextQuestionId = g.questionIds[idxInGroup + 1];
                    }
                }

                if (nextQuestionId) {
                    // Stay in same group, move to next question
                    groupActiveQuestion[g.id] = nextQuestionId;
                    currentQuestionId = nextQuestionId;
                    // Add to history
                    questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                    // If moving within PT groups, keep accordion PT index aligned
                    if (currentGroupId === 'EXT' || currentGroupId === 'CONV') {
                        const idx = g.questionIds.indexOf(nextQuestionId);
                        if (idx >= 0) accordionState[currentGroupId].activePTIndex = idx;
                    }
                    renderGroup(currentGroupId);
                    updateStepIndicators();
                    updateProgress();
                    return;
                }

                // No more questions in this group – recompute flow and move to next group
                flow = computeFlow();
                const idx = flow.indexOf(currentGroupId);

                // Special handling: if we just completed SITE (T5), route to first project type group in flow
                if (currentGroupId === 'SITE' && activeId === 'T5') {
                    // Find the next group after SITE in the flow (should be EXT, CONV, or DEM)
                    const nextIdx = idx + 1;
                    if (nextIdx < flow.length) {
                        currentGroupIndex = nextIdx;
                        currentGroupId = flow[nextIdx];
                        const nextGroup = groups[currentGroupId];
                        // Route to first PT question of the selected project type
                        if (currentGroupId === 'EXT') {
                            currentQuestionId = 'PT1';
                        } else if (currentGroupId === 'CONV') {
                            currentQuestionId = 'PT10';
                        } else if (currentGroupId === 'DEM') {
                            currentQuestionId = 'PT17';
                        } else {
                            currentQuestionId = nextGroup ? nextGroup.questionIds[0] : null;
                        }
                        groupActiveQuestion[currentGroupId] = currentQuestionId;
                        // Add to history
                        if (currentQuestionId) {
                            questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                        }
                        renderGroup(currentGroupId);
                        updateStepIndicators();
                        updateProgress();
                        return;
                    } else {
                        // No project types in flow - should not happen, but show results
                        showResults();
                        return;
                    }
                }

                // Check if we just completed a PT group (EXT, CONV, or DEM) without hard stops
                if ((currentGroupId === 'EXT' || currentGroupId === 'CONV' || currentGroupId === 'DEM')) {
                    // Check if this is the last question in the group
                    const idxInGroup = g.questionIds.indexOf(activeId);
                    const isLastInGroup = idxInGroup === g.questionIds.length - 1;

                    if (isLastInGroup && isPTGroupComplete(currentGroupId)) {
                        if (moveToNextPTGroup()) {
                            return;
                        }
                    }

                    // Also check if group is complete even if not last question (for edge cases)
                    if (isPTGroupComplete(currentGroupId)) {
                        // Check if we're trying to move to next question but group is complete
                        const nextQuestionId = opt && opt.next && opt.next.length > 0 ? opt.next[0] : null;
                        if (nextQuestionId && !g.questionIds.includes(nextQuestionId)) {
                            // Next question is outside group and group is complete - move to next group
                            if (moveToNextPTGroup()) {
                                return;
                            }
                        }
                    }

                }

                const nextIdx = idx + 1;
                if (nextIdx >= flow.length) {
                    showResults();
                    return;
                }
                currentGroupIndex = nextIdx;
                currentGroupId = flow[nextIdx];
                const nextGroup = groups[currentGroupId];
                currentQuestionId = nextGroup ? nextGroup.questionIds[0] : null;
                // Add to history
                if (currentQuestionId) {
                    questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });
                }
                renderGroup(currentGroupId);
                updateStepIndicators();
                updateProgress();
            }

            function goBack() {
                clearTimeout(autoAdvanceTimer); // Cancel any pending auto-advance
                // If we have history, go back to previous question
                if (questionHistory.length > 1) {
                    // Remove current question from history
                    questionHistory.pop();
                    // Get previous question from history
                    const prev = questionHistory[questionHistory.length - 1];
                    currentGroupId = prev.groupId;
                    currentQuestionId = prev.questionId;

                    // Update group index
                    flow = computeFlow();
                    currentGroupIndex = flow.indexOf(currentGroupId);

                    // Handle accordion state for EXT/CONV groups
                    if (currentGroupId === 'EXT' || currentGroupId === 'CONV') {
                        const g = groups[currentGroupId];
                        const state = accordionState[currentGroupId];

                        // Check if the previous question is a PS question
                        const isPSQuestion = Object.values(groups).some(psGroup => {
                            if (psGroup.id.startsWith('PS')) {
                                return psGroup.questionIds.includes(currentQuestionId);
                            }
                            return false;
                        });

                        if (isPSQuestion) {
                            // Find which PT this PS belongs to
                            for (const ptId of g.questionIds) {
                                const psGroupId = ptToPs[ptId];
                                if (psGroupId) {
                                    const ps = groups[psGroupId];
                                    if (ps && ps.questionIds.includes(currentQuestionId)) {
                                        // This PS belongs to this PT
                                        state.mode = 'ps';
                                        state.expandedPT = ptId;
                                        state.psGroup = psGroupId;
                                        state.psIndex = ps.questionIds.indexOf(currentQuestionId);
                                        state.activePTIndex = g.questionIds.indexOf(ptId);
                                        break;
                                    }
                                }
                            }
                        } else {
                            // Previous question is a PT question
                            const ptIdx = g.questionIds.indexOf(currentQuestionId);
                            if (ptIdx >= 0) {
                                state.activePTIndex = ptIdx;
                                // Check if this PT has an open PS accordion
                                const ptAnswer = answers[currentQuestionId];
                                const psGroupId = ptToPs[currentQuestionId];
                                if (ptAnswer && ptAnswer.value === 'yes' && psGroupId) {
                                    // PT was answered "Yes" - keep accordion open but go to last PS question
                                    const ps = groups[psGroupId];
                                    if (ps) {
                                        state.mode = 'ps';
                                        state.expandedPT = currentQuestionId;
                                        state.psGroup = psGroupId;
                                        // Find the last answered PS question or go to first
                                        let lastAnsweredIdx = -1;
                                        for (let i = ps.questionIds.length - 1; i >= 0; i--) {
                                            if (answers[ps.questionIds[i]]) {
                                                lastAnsweredIdx = i;
                                                break;
                                            }
                                        }
                                        state.psIndex = lastAnsweredIdx >= 0 ? lastAnsweredIdx : 0;
                                        currentQuestionId = ps.questionIds[state.psIndex];
                                    }
                                } else {
                                    // PT was answered "No" or not answered - close accordion
                                    state.mode = 'pt';
                                    state.expandedPT = null;
                                    state.psGroup = null;
                                    state.psIndex = 0;
                                }
                            }
                        }
                    }

                    groupActiveQuestion[currentGroupId] = currentQuestionId;
                    renderGroup(currentGroupId);
                    updateStepIndicators();
                    updateProgress();
                    updateContinueState();
                    return;
                }

                // No history - fall back to group-based navigation
                flow = computeFlow();
                const idx = flow.indexOf(currentGroupId);
                const prevIdx = idx - 1;
                if (prevIdx < 0) return;
                currentGroupIndex = prevIdx;
                currentGroupId = flow[prevIdx];
                const g = groups[currentGroupId];
                currentQuestionId = groupActiveQuestion[g.id] || g.questionIds[0];

                // Add to history
                questionHistory.push({ groupId: currentGroupId, questionId: currentQuestionId });

                renderGroup(currentGroupId);
                updateStepIndicators();
                updateProgress();
            }

            function updateProgress() {
                const bar = document.getElementById('bottomBar');
                const indexEl = document.getElementById('questionIndex');
                const totalEl = document.getElementById('questionTotal');
                if (!indexEl || !totalEl) return;
                const current = parseInt(indexEl.textContent, 10) || 1;
                const total = parseInt(totalEl.textContent, 10) || 1;
                if (bar && bar.updateProgress) {
                    bar.updateProgress(current, total);
                }
            }

            function showResults(stopResult, guidance, isStop = false) {
                document.getElementById('questionShell').classList.add('hidden');
                document.getElementById('resultShell').classList.remove('hidden');
                // Hide sticky footer on results page
                const stickyFooter = document.querySelector('.sticky-footer');
                if (stickyFooter) stickyFooter.style.display = 'none';

                const resultContainer = document.getElementById('resultContainer');

                // Collect all stop conditions and their reasons
                const stopReasons = [];
                const allGuidance = [];
                const answersWithGuidance = [];

                // Check all answers for stops, guidance, and results
                for (const [id, ans] of Object.entries(answers)) {
                    const q = questions[id];
                    if (!q) continue;

                    const opt = q.options.find(o => o.value === ans.value);
                    if (opt) {
                        // Collect stop reasons
                        if (opt.stop && opt.result) {
                            stopReasons.push({
                                question: q.question,
                                answer: ans.answer,
                                reason: opt.result,
                                guidance: opt.guidance || q.guidance
                            });
                        }

                        // Collect all guidance (prefer option guidance over question guidance)
                        const guidanceText = opt.guidance || q.guidance;
                        if (guidanceText) {
                            // Avoid duplicates by checking if we've seen this guidance text for this question
                            const guidanceKey = `${id}:${guidanceText}`;
                            if (!allGuidance.some(g => g.question === q.question && g.guidance === guidanceText)) {
                                allGuidance.push({
                                    question: q.question,
                                    answer: ans.answer,
                                    guidance: guidanceText
                                });
                            }
                        }

                        // Collect answers with guidance for summary
                        answersWithGuidance.push({
                            question: q.question,
                            answer: ans.answer,
                            guidance: guidanceText,
                            hasStop: opt.stop,
                            result: opt.result
                        });
                    }
                }

                // Also check stopState if it exists
                if (stopState) {
                    if (stopState.result && !stopReasons.some(r => r.reason === stopState.result)) {
                        const q = questions[stopState.fromQuestion];
                        stopReasons.push({
                            question: q ? q.question : 'Unknown question',
                            answer: 'Yes',
                            reason: stopState.result,
                            guidance: stopState.guidance
                        });
                    }
                }

                const hasStopFromAnswers = stopReasons.length > 0;

                // Check for catch-all scenario: no project types selected
                const wantsExt = answers.PG3 && answers.PG3.value === 'yes';
                const wantsConv = answers.PG4 && answers.PG4.value === 'yes';
                const wantsDem = answers.PG5 && answers.PG5.value === 'yes';
                const noProjectTypes = !wantsExt && !wantsConv && !wantsDem && answers.PG5; // PG5 answered means we've completed PG group

                const anyStop = isStop || hasStopFromAnswers || !!stopState;
                let heading, description;

                if (noProjectTypes && !anyStop) {
                    // Catch-all: no project types selected
                    heading = 'No Specific Project Type Selected';
                    description = 'Based on your answers, you have not selected any specific project types (extensions, conversions, or demolition). If you are planning other types of work, please consult with your Local Planning Authority or a qualified planning consultant for guidance specific to your project.';
                } else {
                    heading = anyStop ? 'Planning Permission Likely Required' : 'Permitted Development May Apply';
                    description = anyStop
                        ? 'Based on your answers, at least one aspect of your project falls outside standard permitted development rules. You are likely to need planning permission for your proposed works.'
                        : 'Based on your answers, your project may fall within Permitted Development rights. However, you should confirm this formally before starting any work.';
                }

                let nextSteps;
                if (noProjectTypes && !anyStop) {
                    nextSteps = [
                        'If you are planning specific works, please restart the questionnaire and select the relevant project types.',
                        'For general planning advice, contact your Local Planning Authority.',
                        'Consider consulting with a qualified planning consultant for project-specific guidance.',
                        'You may also find helpful information in planning guidance documents or the Interactive House tool.',
                        'Increase your confidence by getting advice from your local planning authority or our planning guidance service. <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>',
                        'Download your "Beginners Guide to Planning" <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>'
                    ];
                } else if (anyStop) {
                    nextSteps = [
                        'Your project has one or more elements that require planning permission.',
                        'We recommend speaking with your Local Planning Authority at an early stage.',
                        'Increase your confidence by getting advice from your local planning authority or our planning guidance service. <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>',
                        'Play it safe and submit a Lawful Development Certificate (LDC) via the Planning Portal and get permission in writing. <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>',
                        'Find out what type of planning application you will need using our Application Identifier and Application Cost Calculator tools. <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(links)</a>',
                        'Seek professional planning advice to help you prepare the right information and drawings.',
                        'Remember that Building Control approval will still be required for most structural or habitable works.',
                        'Download your "Beginners Guide to Planning" <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>'
                    ];
                } else {
                    nextSteps = [
                        'Consider applying for a Lawful Development Certificate (LDC) to confirm your project is lawful under Permitted Development.',
                        'Play it safe and submit a Lawful Development Certificate (LDC) via the Planning Portal and get permission in writing. <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>',
                        'Increase your confidence by getting advice from your local planning authority or our planning guidance service. <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>',
                        'Share this assessment with your designer, architect or planning consultant.',
                        'Contact your Local Planning Authority for any site-specific constraints or local policies.',
                        'Check Building Regulations and obtain Building Control approval where required.',
                        'Keep a record of this assessment and any advice you receive for future reference.',
                        'Download your "Beginners Guide to Planning" <a href="javascript:void(0)" style="color: #3b82f6; text-decoration: underline;">(link)</a>'
                    ];
                }

                // Build reasons section HTML
                let reasonsHtml = '';
                if (stopReasons.length > 0) {
                    reasonsHtml = `
                    <div class="result-reasons">
                        <h3>Why Planning Permission is Required</h3>
                        <div class="reasons-list">
                            ${stopReasons.map((reason, idx) => `
                                <div class="reason-item">
                                    <div class="reason-icon">!</div>
                                    <div class="reason-content">
                                        <div class="reason-question">${reason.question}</div>
                                        <div class="reason-answer">Your answer: ${reason.answer}</div>
                                        <div class="reason-text">${reason.reason}</div>
                                        ${reason.guidance ? `<div class="reason-guidance">${reason.guidance}</div>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                }

                // We no longer show a separate \"Guidance & Important Information\" section on the result page
                // Guidance is surfaced within the reasons and answer summary cards instead.
                let guidanceHtml = '';

                // Build answer summary with guidance
                let answersHtml = '';
                for (const item of answersWithGuidance) {
                    answersHtml += `
                    <div class="answer-item">
                        <div class="answer-question"><strong>${item.question}</strong></div>
                        <div class="answer-value">${item.answer}</div>
                        ${item.guidance ? `<div class="answer-guidance">${item.guidance}</div>` : ''}
                        ${item.hasStop && item.result ? `<div class="answer-result"><strong>Impact:</strong> ${item.result}</div>` : ''}
                    </div>
                `;
                }

                const disclaimerText = 'This guidance is for informational purposes only and is not a substitute for professional planning advice. Always consult with your Local Planning Authority or a qualified planning consultant before proceeding with any development.';
                const answerCount = answersWithGuidance.length;

                resultContainer.innerHTML = `
                <div class="result-header">
                    <div class="result-title">Your Planning Assessment</div>
                    <div class="result-subtitle">Based on the information you provided</div>
                </div>

                ${!anyStop && !noProjectTypes ? `
                <div class="result-success-header">
                    <span class="result-success-icon">✅</span>
                    <div style="font-size:18px;font-weight:700;color:#065F46;margin-bottom:8px;">No Blocking Issues Found</div>
                    <div style="font-size:15px;color:#6B7280;">Your answers suggest Permitted Development may apply — see details below.</div>
                </div>` : ''}

                <div class="result-card ${anyStop ? 'outcome-stop' : (noProjectTypes ? '' : 'success')}">
                    <h3>${anyStop ? '⛔ ' : (noProjectTypes ? '' : '🟢 ')}${heading}</h3>
                    <p>${description}</p>
                </div>

                ${reasonsHtml}

                <div class="result-card">
                    <h3>Next Steps</h3>
                    <ul class="result-list">
                        ${nextSteps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>

                <div class="result-secondary">
                    <div class="answer-summary-header" id="answerSummaryHeader" onclick="toggleAnswerSummary()">
                        <h3>Your Answer Summary</h3>
                        <div class="answer-summary-meta">
                            <span>${answerCount} answer${answerCount === 1 ? '' : 's'}</span>
                            <span class="answer-summary-chevron">▼</span>
                        </div>
                    </div>
                <div class="answers-list answer-summary-body" id="answerSummaryBody">
                    ${answersHtml}
                </div>
                </div>

                <div class="disclaimer">
                    <strong>Important Disclaimer</strong><br>
                    ${disclaimerText}
                </div>

                <div class="result-footer">
                    <button class="btn-light" onclick="restart()">Start over</button>
                    <button class="btn-secondary-ghost" onclick="window.print()">🖨 Print result</button>
                    <button class="btn-secondary-ghost" onclick="copyResultToClipboard()">📋 Copy summary</button>
                </div>
            `;
            }

            // Toggle the visibility of the answer summary on the result screen
            function toggleAnswerSummary() {
                const body = document.getElementById('answerSummaryBody');
                const header = document.getElementById('answerSummaryHeader');
                if (!body || !header) return;
                const isCollapsed = body.classList.contains('collapsed');
                if (isCollapsed) {
                    body.classList.remove('collapsed');
                    header.classList.remove('answer-summary-collapsed');
                } else {
                    body.classList.add('collapsed');
                    header.classList.add('answer-summary-collapsed');
                }
            }

            function copyResultToClipboard() {
                const heading = document.querySelector('.result-card h3')?.textContent || '';
                const description = document.querySelector('.result-card p')?.textContent || '';
                const answers = [...document.querySelectorAll('.answer-item')].map(el => {
                    const q = el.querySelector('.answer-question')?.textContent || '';
                    const a = el.querySelector('.answer-value')?.textContent || '';
                    return `Q: ${q}\nA: ${a}`;
                }).join('\n\n');
                const text = `Planning Assessment Result\n${'='.repeat(30)}\n${heading}\n\n${description}\n\n${'='.repeat(30)}\nYour Answers\n${'='.repeat(30)}\n${answers}`;
                navigator.clipboard.writeText(text).then(() => {
                    const btn = document.querySelector('[onclick="copyResultToClipboard()"]');
                    if (btn) { btn.textContent = '✓ Copied!'; setTimeout(() => btn.textContent = '📋 Copy summary', 2000); }
                });
            }

            function restart() {
                document.getElementById('resultShell').classList.add('hidden');
                document.getElementById('questionShell').classList.remove('hidden');
                // Show sticky footer again
                const stickyFooter = document.querySelector('.sticky-footer');
                if (stickyFooter) stickyFooter.style.display = 'flex';
                // Reset progress bar
                const fill = document.getElementById('progressBarFill');
                if (fill) fill.style.width = '0%';
                init();
            }

            // Wait for defer scripts (Web Components) to finish loading
            document.addEventListener('DOMContentLoaded', function () { init(); });
        