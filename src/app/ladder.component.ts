import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAchievement } from './models/achievement.model';
import { LadderService } from './ladder.service';
import { getClassIconPath } from '../utils/classIconHelper';
import { getRaceIconPath } from '../utils/raceIconHelper';
import { openArmory, getArmoryUrl } from '../utils/armory';

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
  currentRealm?: string = 'Evermoon';
  currentFaction?: string;
  getClassIconPath = getClassIconPath;
  openArmory = openArmory;
  getArmoryUrl = getArmoryUrl;

  constructor(private ladderService: LadderService) {}

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters(sortSelect?: HTMLSelectElement, realmSelect?: HTMLSelectElement, factionSelect?: HTMLSelectElement) {
    // If select elements are passed, read values directly from them
    if (sortSelect) {
      this.currentSort = sortSelect.value;
      this.currentRealm = realmSelect?.value ? realmSelect.value : undefined;
      this.currentFaction = factionSelect?.value ? factionSelect.value : undefined;
    }
    this.loadPlayers();
  }

  private loadPlayers() {
    const observable = this.currentSort === 'achievementPoints'
      ? this.ladderService.getAchievements(this.currentRealm, this.currentFaction)
      : this.ladderService.getHonorableKills(this.currentRealm, this.currentFaction);
    
    observable.subscribe(data => {
      this.updatePlayers(data);
    });
  }

  private updatePlayers(data: any[]) {
    this.players = data.map((item, idx) => ({
      rank: idx + 1,
      name: item.name,
      realm: item.realm,
      race: item.race,
      gender: item.gender,
      raceIcon: getRaceIconPath(item.race, item.gender),
      classIcon: item.class.toString(),
      guild: item.guild,
      achievementPoints: item.achievementPoints,
      honorableKills: item.honorableKills,
      faction: item.faction
    }));
  }

  onImageError(event: any) {
    console.error('Failed to load image:', event.target.src);
  }
}