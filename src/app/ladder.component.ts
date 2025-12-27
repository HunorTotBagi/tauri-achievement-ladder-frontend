import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAchievement } from './models/achievement.model';

@Component({
  selector: 'app-achievement-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AchievementLadderComponent implements OnInit {
  players: PlayerAchievement[] = [];
  currentSort: string = 'achievementPoints';

  ngOnInit() {
    // Here you would call your backend service
    this.players = this.getMockData(); 
  }

  setSort(criterion: string) {
    this.currentSort = criterion;
    // Logic to re-fetch or re-sort data
  }

  getMockData(): PlayerAchievement[] {
    return [
      {
        rank: 1,
        name: 'Larahhh',
        realm: 'Tauri',
        raceIcon: '⚔️',
        classIcon: '🗡️',
        guild: 'Outlaws',
        achievementPoints: 19135,
        honorableKills: 342,
        timePlayed: '45d 12h',
        faction: 'alliance'
      },
      {
        rank: 2,
        name: 'Hupap',
        realm: 'Tauri',
        raceIcon: '✨',
        classIcon: '☀️',
        guild: 'Outlaws',
        achievementPoints: 19035,
        honorableKills: 298,
        timePlayed: '42d 8h',
        faction: 'alliance'
      },
      {
        rank: 3,
        name: 'Spuky',
        realm: 'Evermoon',
        raceIcon: '🌙',
        classIcon: '🗡️',
        guild: 'Leviathan',
        achievementPoints: 18935,
        honorableKills: 287,
        timePlayed: '38d 16h',
        faction: 'alliance'
      },
      {
        rank: 4,
        name: 'Arrchangel',
        realm: 'WoD',
        raceIcon: '✨',
        classIcon: '🔮',
        guild: 'Mythic',
        achievementPoints: 18900,
        honorableKills: 256,
        timePlayed: '35d 4h',
        faction: 'horde'
      },
      {
        rank: 5,
        name: 'Asamoschra',
        realm: 'Tauri',
        raceIcon: '⚒️',
        classIcon: '🛡️',
        guild: 'Outlaws',
        achievementPoints: 18880,
        honorableKills: 219,
        timePlayed: '32d 20h',
        faction: 'alliance'
      }
    ];
  }
}
