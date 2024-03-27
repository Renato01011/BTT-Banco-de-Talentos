import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Picture } from '../../models/interfaces/user.interfaces';
import { UrlConstants } from 'src/app/core/global/constants/url.constants';
import {
  PostResponse,
  NewUserListRespone,
} from '../../models/interfaces/respone.interfaces';
import { UserList } from '../../models/interfaces/userList.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public favoritesCache: UserList[] = [];

  constructor(private httpClient: HttpClient) {}

  getPicture(username: string): Observable<Picture> {
    const body = { name: username };
    return this.httpClient.post<Picture>(UrlConstants.URL_REQ_USER, body);
  }

  addNewList(userId: number, listName: string): Observable<NewUserListRespone> {
    const body = { userId: userId, listName: listName };
    return this.httpClient.post<NewUserListRespone>(
      `${UrlConstants.URL_ADD_LIST_USER}`,
      body
    );
  }

  getUserLists(userId: number): Observable<UserList[]> {
    const body = { id: userId };
    return this.httpClient
      .post<UserList[]>(`${UrlConstants.URL_GET_LISTS_USER}`, body)
      .pipe(tap((favorites) => (this.favoritesCache = favorites)));
  }

  addTalentToList(idListUser: number, idTalent: number) {
    const body = { listId: idListUser, talentId: idTalent };
    return this.httpClient.post<PostResponse>(
      `${UrlConstants.URL_ADD_TALENT_TO_LIST}`,
      body
    );
  }

  editTalentUserList(idListUserTalent: number, newListId: number) {
    const body = { listUserTalentId: idListUserTalent, newUserListId: newListId };
    return this.httpClient.put<PostResponse>(
      `${UrlConstants.URL_EDIT_LIST_USER_TALENT}`,
      body
    );
  }
}
