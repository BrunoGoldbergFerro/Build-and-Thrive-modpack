ServerEvents.recipes(event => {
  event.replaceInput({ mod: 'autowork' }, 'autowork:buffer', 'caverns_and_chasms:storage_duct')
  console.log('Hello! The recipe event has fired!')
})
