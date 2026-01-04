import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAchievement } from './models/achievement.model';
import { LadderService } from './ladder.service';
import { getClassIconPath } from '../utils/classIconHelper';
import { getRaceIconPath } from '../utils/raceIconHelper';
import { openArmory, getArmoryUrl, getGuildArmoryUrl } from '../utils/armory';

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
  currentClass?: number;
  classMenuOpen = false;
  selectedClassLabel = 'All Classes';
  selectedClassIcon?: string;
  getClassIconPath = getClassIconPath;
  openArmory = openArmory;
  getArmoryUrl = getArmoryUrl;
  getGuildArmoryUrl = getGuildArmoryUrl;

  classOptions = [
    { id: 6, name: 'Death Knight', icon: getClassIconPath(6) },
    { id: 12, name: 'Demon Hunter', icon: getClassIconPath(12) },
    { id: 11, name: 'Druid', icon: getClassIconPath(11) },
    { id: 3, name: 'Hunter', icon: getClassIconPath(3) },
    { id: 8, name: 'Mage', icon: getClassIconPath(8) },
    { id: 10, name: 'Monk', icon: getClassIconPath(10) },
    { id: 2, name: 'Paladin', icon: getClassIconPath(2) },
    { id: 5, name: 'Priest', icon: getClassIconPath(5) },
    { id: 4, name: 'Rogue', icon: getClassIconPath(4) },
    { id: 7, name: 'Shaman', icon: getClassIconPath(7) },
    { id: 9, name: 'Warlock', icon: getClassIconPath(9) },
    { id: 1, name: 'Warrior', icon: getClassIconPath(1) },
  ];

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
    this.closeAllDropdowns();
    this.loadPlayers();
  }

  closeAllDropdowns(except?: 'class') {
    if (except !== 'class') {
      this.classMenuOpen = false;
    }
  }

  toggleClassMenu() {
    const nextState = !this.classMenuOpen;
    this.closeAllDropdowns('class');
    this.classMenuOpen = nextState;
  }

  selectClass(option?: { id: number; name: string; icon: string }) {
    this.currentClass = option?.id;
    this.selectedClassLabel = option ? option.name : 'All Classes';
    this.selectedClassIcon = option?.icon;
    this.classMenuOpen = false;
    this.applyFilters();
  }

  private loadPlayers() {
    const observable = this.currentSort === 'achievementPoints'
      ? this.ladderService.getAchievements(this.currentRealm, this.currentFaction, this.currentClass)
      : this.ladderService.getHonorableKills(this.currentRealm, this.currentFaction, this.currentClass);
    
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