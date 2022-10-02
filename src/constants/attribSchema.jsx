export const ATTRIB_SCHEMA = {
  abilities: [
    {label: 'Strength', name: 'STR', default: '10'},
    {label: 'Dexterity', name: 'DEX', default: '10'},
    {label: 'Constitution', name: 'CON', default: '10'},
    {label: 'Intelligence', name: 'INT', default: '10'},
    {label: 'Wisdom', name: 'WIS', default: '10'},
    {label: 'Charisma', name: 'CHA', default: '10'},
  ],
  info: [
    {label: 'Sheet type', name: 'character_sheet', default: 'None', readonly: true},
    {label: 'Sheet version', name: 'PFSheet_Version', default: 'None', readonly: true},
  ],
  general: [
    {label: 'Level', name: 'level', default: '1', readonly: false},

  ],
}