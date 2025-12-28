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
  private apiUrl = 'http://localhost:5000/api/ladder/sorted/achievements';

  constructor(private http: HttpClient) {}

  getAchievements(): Observable<LadderAchievement[]> {
    return this.http.get<LadderAchievement[]>(this.apiUrl);
  }
}