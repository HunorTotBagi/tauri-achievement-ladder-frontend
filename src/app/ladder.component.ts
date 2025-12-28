import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAchievement } from './models/achievement.model';
import { LadderService } from './ladder.service';

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

  constructor(private ladderService: LadderService) {}

ngOnInit() {
  this.ladderService.getAchievements().subscribe(data => {
    this.updatePlayers(data);
  });
}

setSort(criterion: string) {
  this.currentSort = criterion;
  if (criterion === 'achievementPoints') {
    this.ladderService.getAchievements().subscribe(data => {
      this.updatePlayers(data);
    });
  } else if (criterion === 'honorableKills') {
    this.ladderService.getHonorableKills().subscribe(data => {
      this.updatePlayers(data);
    });
  }
}

private updatePlayers(data: any[]) {
  this.players = data.map((item, idx) => ({
    rank: idx + 1,
    name: item.name,
    realm: item.realm,
    raceIcon: this.getRaceIcon(item.race),
    classIcon: this.getClassIcon(item.class),
    guild: item.guild,
    achievementPoints: item.achievementPoints,
    honorableKills: item.honorableKills,
    faction: item.faction
  }));
}

  getRaceIcon(race: number): string {
    // Map race number to emoji or image path
    const raceIcons: { [key: number]: string } = {
      1: '⚔️', // Example
      2: '✨',
      3: '🌙',
      4: '🛡️',
      5: '🔮',
      // Add more mappings as needed
    };
    return raceIcons[race] || '';
  }

  getClassIcon(cls: number): string {
    // Map class number to emoji or image path
    const classIcons: { [key: number]: string } = {
      1: '🗡️',
      2: '☀️',
      3: '🛡️',
      4: '🔮',
      11: '⚒️',
      // Add more mappings as needed
    };
    return classIcons[cls] || '';
  }
}