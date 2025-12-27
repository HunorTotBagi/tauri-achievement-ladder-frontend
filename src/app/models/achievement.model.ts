export interface PlayerAchievement {
  rank: number;
  name: string;
  realm: string;
  raceIcon: string;
  classIcon: string;
  guild: string;
  achievementPoints: number;
  honorableKills: number;
  timePlayed: string;
  faction: 'horde' | 'alliance' | 'neutral'; 
}
