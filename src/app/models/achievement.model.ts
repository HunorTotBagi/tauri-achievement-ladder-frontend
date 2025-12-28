export interface PlayerAchievement {
  rank: number;
  name: string;
  realm: string;
  raceIcon: string;
  classIcon: string;
  guild: string;
  achievementPoints: number;
  honorableKills: number;
  faction: 'Horde' | 'Alliance'; 
}
