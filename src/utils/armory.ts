export function getArmoryUrl(characterName: string, realm: string): string {
  const realmMapping: Record<string, string> = {
    'evermoon': '[EN] Evermoon',
    'tauri': '[HU] Tauri WoW Server',
    'wod': '[HU] Warriors of Darkness',
  };

  const normalizedRealm = realm.toLowerCase();
  const encodedRealm = encodeURIComponent(realmMapping[normalizedRealm] || realm);
  const encodedName = encodeURIComponent(characterName);

  return `https://tauriwow.com/armory#character-sheet.xml?r=${encodedRealm}&n=${encodedName}`;
}

export function openArmory(characterName: string, realm: string): void {
  const url = getArmoryUrl(characterName, realm);
  window.open(url, '_blank');
}
