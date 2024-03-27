import { environment } from 'src/environments/environment';

export class UrlConstants {
  public static readonly URL_LOGIN_TOKEN =
    environment.host + environment.context + '/auth/login';
  public static readonly URL_REQ_LANG =
    environment.host + environment.context + '/master/languages';
  public static readonly URL_REQ_ROLES =
    environment.host + environment.context + '/master/roles';
  public static readonly URL_REQ_CURRS =
    environment.host + environment.context + '/master/currencies';
  public static readonly URL_REQ_PROF =
    environment.host + environment.context + '/master/profiles';
  public static readonly URL_REQ_LANG_PROF =
    environment.host + environment.context + '/master/proficiency';
  public static readonly URL_REQ_COUNTRIES =
    environment.host + environment.context + '/master/countries';
  public static readonly URL_REQ_CITIES =
    environment.host + environment.context + '/master/countries/cities';
  public static readonly URL_POST_TALENT =
    environment.host + environment.context + '/talent/new-talent';
  public static readonly URL_REQ_TEC_SKILL =
    environment.host + environment.context + '/tech/skills';
  public static readonly URL_REQ_FILTER =
    environment.host + environment.context + '/filter';
  public static readonly URL_REQ_SRCH_BY_ID =
    environment.host + environment.context + '/talent/get-talent';
  public static readonly URL_ADD_TEC_SKILL =
    environment.host + environment.context + '/tech/add';
  public static readonly URL_ADD_SFT_SKILL =
    environment.host + environment.context + '/soft/add';
  public static readonly URL_ADD_WRK_EXP =
    environment.host + environment.context + '/work/add';
  public static readonly URL_ADD_EDUC =
    environment.host + environment.context + '/educ/add';
  public static readonly URL_ADD_LANG =
    environment.host + environment.context + '/lang/add';
  public static readonly URL_ADD_FILE =
    environment.host + environment.context + '/file';
  public static readonly URL_ADD_FEEDBACK =
    environment.host + environment.context + '/feedback';
  public static readonly URL_EDIT_DESCRIPTION =
    environment.host + environment.context + '/talent/update/description';
  public static readonly URL_EDIT_PROFILE_PICTURE =
    environment.host + environment.context + '/talent/update/profile-picture';
  public static readonly URL_EDIT_SALARY =
    environment.host + environment.context + '/talent/update/salary';
  public static readonly URL_EDIT_SOCIAL_LINKS =
    environment.host + environment.context + '/talent/update/social-links';
  public static readonly URL_EDIT_EDUC_EXP =
    environment.host + environment.context + '/educ/update';
  public static readonly URL_EDIT_WORK_EXP =
    environment.host + environment.context + '/work/update';
  public static readonly URL_EDIT_LANG_EXP =
    environment.host + environment.context + '/lang/update';
  public static readonly URL_DELETE_EDUC_EXP =
    environment.host + environment.context + '/educ/delete';
  public static readonly URL_DELETE_WORK_EXP =
    environment.host + environment.context + '/work/delete';
  public static readonly URL_DELETE_LANG_EXP =
    environment.host + environment.context + '/lang/delete';
  public static readonly URL_REQ_USER =
    environment.host + environment.context + '/user/picture';
  public static readonly URL_ADD_LIST_USER =
    environment.host + environment.context + '/list/new';
  public static readonly URL_GET_LISTS_USER =
    environment.host + environment.context + '/list';
  public static readonly URL_ADD_TALENT_TO_LIST =
    environment.host + environment.context + '/list-user/add';
  public static readonly URL_EDIT_LIST_USER_TALENT =
    environment.host + environment.context + '/list-user/edit';
  public static readonly URL_UPDATE_CV =
    environment.host + environment.context + '/file/update';
}
