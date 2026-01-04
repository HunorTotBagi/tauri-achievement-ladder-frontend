import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LadderAchievement {
  name: string;
  race: number;
  gender: number;
  class: number;
  realm: string;
  guild: string;
  achievementPoints: number;
  honorableKills: number;
  faction: 'Horde' | 'Alliance';
}

@Injectable({ providedIn: 'root' })
export class LadderService {
  constructor(private http: HttpClient) {}

  getAchievements(
    realm?: string,
    faction?: string,
    playerClass?: number,
    pageNumber: number = 1,
    pageSize: number = 100
  ): Observable<LadderAchievement[]> {
    let url = `http://localhost:5000/api/ladder/sorted/achievements?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if (realm) {
      url += `&realm=${realm}`;
    }
    if (faction) {
      url += `&faction=${faction}`;
    }
    if (playerClass) {
      url += `&playerClass=${playerClass}`;
    }
    return this.http.get<LadderAchievement[]>(url);
  }

  getHonorableKills(
    realm?: string,
    faction?: string,
    playerClass?: number,
    pageNumber: number = 1,
    pageSize: number = 100
  ): Observable<LadderAchievement[]> {
    let url = `http://localhost:5000/api/ladder/sorted/honorableKills?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if (realm) {
      url += `&realm=${realm}`;
    }
    if (faction) {
      url += `&faction=${faction}`;
    }
    if (playerClass) {
      url += `&playerClass=${playerClass}`;
    }
    return this.http.get<LadderAchievement[]>(url);
  }
}