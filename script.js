/****
 * ポップ一覧
 * @since 2019/3/5
 ****/
var _vw_popup = [
/****
 * ポップアップメニュー
 * @since 2019/3/5
 ****/
[{ type: 'block'
 , id: 'popup'
 , child: [
   {  type: 'def-list'
    , child: [
      {  type: 'title'
       , class: 'menu_group'
       , text: 'チケット'
       , items: [
         {  id: 'hm_search'
          , class: 'menu_item'
          , data: {page: '#view01'}
          , text: '検索'
         }
        ,{  id: 'hm_project'
          , class: 'menu_item'
          , data: {page: '#view02'}
          , text: 'プロジェクト'
         }]
      }
     ,{  type: 'title'
       , class: 'menu_group'
       , text: 'マスタ'
       , items: [
         {  id: 'hm_user'
          , class: 'menu_item'
          , data: {page: '#page_user'}
          , text: 'ユーザ'
         }
        ,{  id: 'hm_role'
          , class: 'menu_item'
          , data: {page: '#page_role'}
          , text: 'ロール'
         }
        ,{  id: 'hm_p_stat'
          , class: 'menu_item'
          , data: {page: '#view03'}
          , text: 'プロジェクト'
         }
        ,{  id: 'hm_t_stat'
          , class: 'menu_item'
          , data: {page: '#page_t_stat'}
          , text: 'チケット状態'
         }
        ,{  id: 'hm_t_kind'
          , class: 'menu_item'
          , data: {page: '#page_t_kind'}
          , text: 'チケット種類'
         }
        ,{  id: 'hm_t_prgs'
          , class: 'menu_item'
          , data: {page: '#page_t_prgs'}
          , text: 'チケット進捗'
         }
        ,{  id: 'hm_t_pri'
          , class: 'menu_item'
          , data: {page: '#page_t_pri'}
          , text: 'チケット優先順位'
         }]
      }]
   }]
}]  /* end of id:popup */
,
/****
 * 一覧ポップアップ
 * @since 2019/3/5
 ****/
[{ type: 'block'
 , class: 'popup_body-01'
 , child: [
   {  type: 'block'
    , id: 'popup-01-guid'
    , text: 'ガイダンス'
   }
 , {  type: 'block'
    , id: 'popup-01-data'
    , child: []
   }
 , {  type: 'block'
    , id: 'popup-01-ope'
    , child: [
      {  type: 'inp-button'
       , id: 'popup-01-new', text: '新規'
      }
    , {  type: 'inp-button'
       , id: 'popup-01-update', text: '選択'
      }]
   }]
}]
];
/****
 * 隠し列＋表示列の一覧で使用する
 * @since 2019/4/18
 ****/
var _popup_list_01 = {
   type: 'block'
 , id: 'popup_list_01'
 , class: 'list_01_wrapper'
 , child: []
};
/****
 * ログイン部品
 * @since 2019/3/5
 ****/
var _login_vw_body = [
  {  type: 'block'
   , class:'form-inp-area'
   , child: [
     {  type: 'inp-text'
      , name: 'user-id'
      , placeholder: 'ユーザIDを入力'
      , class: 'inp-required'
      , label: {text: 'ユーザID', class: 'title'}
     }
   , {  type: 'inp-passwd'
      , name: 'passwd'
      , placeholder: 'パスワードを入力'
      , class: 'inp-required'
      , label: {text: 'パスワード', class: 'title'}
     }]
  }
, {  type: 'block'
   , class:'form-btn-area'
   , child: [
     {  type: 'inp-submit'
      , id: 'btn-login', text: 'ログイン'
     }
   , {  type: 'inp-reset', text: 'クリア'
     }]
  }
];
/****
 * ログインビュー
 * @since 2019/3/5
 ****/
var _login_view = {
  title: 'login view'
, root: 'login'
, child: [
    {  type: 'form', class: 'input_form'
     , action: '#'
     , child: _login_vw_body
    }
  ]
};

/****
 * プロジェクト登録ビュー
 * @since 2019/4/1
 */
////////// 入力要素
var _view03_sub01 = [
   {  type: 'inp-text', rows: 10
    , class: 'inp-required'
    , name: 'name'
    , placeholder: '名称と説明'
    , label: {text: '名称／説明', class: 'title'}
   }
 , {  type: 'inp-select', name: 'manager_id'
    , options: [
         { value: 1, text: '全員'}
      ]
     , label: {text: '管理者', class: 'title'}
   }
 , {  type: 'inp-cbx', id: 'm02-s-opt1'
    , name: 'opened'
    , cbx_label: {text: '公開する'}
    , label: {text: '公開', class: 'title'}
   }
 , {  type: 'inp-cbx', id: 'm02-s-opt2'
    , name: 'alive'
    , cbx_label: {text: '進行中'}
    , label: {text: '状態', class: 'title'}
   }
];
////////// プロジェクト管理情報
var _view03_sub02 = [
   {  type: 'inp-text', readonly: true, name: 'id'
    , label: {text: 'プロジェクトID', class: 'title'}
   }
 , {  type: 'inp-text', readonly: true, name: 'last_update'
    , label: {text: '更新日時', class: 'title'}
   }
];
////////// 操作部
var _view03_sub03 = [
   {  type: 'inp-submit', id: 'btn-new-project', text: '登録'}
 , {  type: 'inp-submit', id: 'btn-upd-project', text: '更新'}
 , {  type: 'inp-reset', text: 'クリア'}
];
////////// ルート
var _view03 = {
  title: 'new project view'
, root: 'view03'
, child: [
    {  type: 'h4'
     , text: 'プロジェクトメンテナンス'
     , class: 'page-title'
    }
   ,{  type: 'form', class: 'input_form'
     , action: '#'
     , child: [
       {  type: 'block'
        , child: [
          {  type: 'block'
           , class: 'form-inp-area-2'
           , child: _view03_sub01
          }
        , {  type: 'block'
           , id: 'project-upd-key'
           , child: _view03_sub02
          }]
       }
     , {  type: 'block'
        , class:'form-btn-area'
        , child: _view03_sub03
       }]
    }
  ]
};

/****
 * プロジェクト一覧ビュー
 * @since 2019/3/20
 */
var _view02 = {
  title: 'project list view'
, root: 'view02'
, child: [
    {  type: 'h4'
     , text: 'プロジェクト一覧'
     , class: 'page-title'
    }
   ,{  type: 'block'
     , id: 'prj-list-wrapper'
     , child: [
         /* 動的に作成する */
       ]
    }]
};
/****
 * チケットメンテナンス画面
 * @since 2019/4/26
 ****/
var _view04_sub01 = [
  {  type: 'inp-text', rows: 10
   , name: 'title', placeholder: 'タイトルと説明'
   , class: 'inp-required'
   , label: {text: 'タイトルと説明', class: 'title'}
  }
, {  type: 'inp-date', name: 'start_date'
   , label: {text: '開始日', class: 'title'}
  }
, {  type: 'inp-date', name: 'finish_date'
   , label: {text: '完了日', class: 'title'}
  }
, {  type: 'inp-select'
   , name: 'kind_id', options: []
   , label: {text: '種類', class: 'title'}
  }
, {  type: 'inp-select'
   , name: 'priority_id', options: []
   , label: {text: '優先順位', class: 'title'}
  }
, {  type: 'inp-select'
   , name: 'status_id', options: []
   , label: {text: '状態', class: 'title'}
  }
, {  type: 'inp-select'
   , name: 'progress_id', options: []
   , label: {text: '進捗', class: 'title'}
  }
];
////////// チケット管理情報
var _view04_sub02 = [
  {type: 'inp-text', readonly: true, name: 'id'
   , label: {text: 'チケットID', class: 'title'}
  }
, {type: 'inp-text', readonly: true, name: 'version'
  , label: {text: 'バージョン', class: 'title'}
  }
, {type: 'inp-text', readonly: true, name: 'last_update'
   , label: {text: '更新日時', class: 'title'}
  }
, {type: 'block', child: [{type: 'inp-button', id: 'btn-ticket-hist', text: '表示'}], label: {text: '履歴', class: 'title'}
  }
];
////////// 操作部
var _view04_sub03 = [
  {type: 'inp-submit', id: 'btn-new-ticket', text: '登録'}
, {type: 'inp-submit', id: 'btn-upd-ticket', text: '更新'}
, {type: 'inp-reset', text: 'クリア'}
];
////////// ルート
var _view04 = {
  title: 'ticket view'
, root: 'view04'
, child: [
  {  type: 'h4'
   , text: 'チケットメンテナンス'
   , class: 'page-title'
  }
 ,{  type: 'block', class: 'read_only header_title'}
 ,{  type: 'form'
   , class: 'input_form'
   , action: '#'
   , child: [
       {  type: 'block'
        , child: [
          {  type: 'block'
           , class: 'form-inp-area-2'
           , child: _view04_sub01
          }
        , {  type: 'block'
           , id: 'ticket-upd-key'
           , child: _view04_sub02
          }]
       }
     , {  type: 'block'
        , class:'form-btn-area'
        , child: _view04_sub03
       }]
  }]
};
/****
 * 履歴表示画面
 * @since 2019/5/8
 ****/
var _view05 = {
  title: 'ticket history view'
, root: 'view05'
, child: [
    {  type: 'h4', text: 'チケット履歴'
     , class: 'page-title'
    }
  , {  type: 'block'
     , id: 'hist-list-body'
     , text: 'ここに履歴を表示する'
    }
  , {  type: 'block'
     , class: 'form-btn-area'
     , child: [
         {  type: 'inp-button'
          , id: 'btn-hist-close'
          , text: '閉じる'
         }]
    }
  ]
};
/****
 * チケット検索画面
 * @since 2019/3/11
 ****/
var _view01 = {
  title: 'ticket search view'
, root: 'view01'
, child: [
    {  type: 'h4'
     , text: 'チケット検索'
     , class: 'page-title'
    }
   ,{  type: 'form'
     , class: 'input_form'
     , action: '#'
     , child: [
       {  type: 'block'
        , class: 'form-inp-area'
        , child: [
          {  type: 'inp-text'
           , name: 'p01-s-title'
           , placeholder: 'タイトルの一部を入力'
           , label: {
                text: 'タイトル'
              , class: 'title'
             }
          }
        , {  type: 'inp-text'
           , name: 'p01-s-desc'
           , placeholder: '説明の一部を入力'
           , label: {
                text: '説明'
              , class: 'title'
             }
          }
        , {  type: 'inp-date'
           , name: 'p01-s-date-fm'
           , label: {
                text: '開始日(from)'
              , class: 'title'
             }
          }
        , {  type: 'inp-date'
           , name: 'p01-s-date-to'
           , label: {
                text: '開始日(to)'
              , class: 'title'
             }
          }
        , {  type: 'inp-cbx'
           , id: 'p01-s-opt1'
           , name: 'p01-s-opt1'
           , cbx_label: {
                text: '含む'
             }
           , label: {
                text: '完了分'
              , class: 'title'
             }
          }]
      }]
   }]
};
/****
 * アプリケーションヘッダ + ハンバーガーメニュー
 * @since 2019/3/5
 ****/
var app_header = {
  title: 'application header'
, root: 'app_header'
, child: [
  {  type: 'block'
   , class: 'app_header_body'
   , child: [
     {  type: 'block'
      , class: 'app_header_title'
      , child: [
        {  type: 'h2'
         , text: 'チケットLite'
        }]
     }
    ,{  type: 'block'
      , id: 'menu_body'
      , child: [
        {  type: 'block'
         , id: 'humberger'
         , child: [
           {  type: 'block'}
          ,{  type: 'block'}
          ,{  type: 'block'}]
        }]
     }]
  }]
};

/****
 * 各ページの定義
 * @since 2019/3/5
 ****/
var view_defs = [
  _login_view, _view01, _view02, _view03, _view04, _view05
];

/****
 * 全ページの定義（外枠）
 * @since 2019/3/5
 ****/
var page_defs = [{
  title: 'page defs'
, root: 'ap_contents'
, child: [
  {  type: 'block', id: 'popup_bg', class: 'page page_hidden'}
, {  type: 'block', id: 'login', class: 'page page_hidden'}
, {  type: 'block', id: 'view01', class: 'page page_hidden'}
, {  type: 'block', id: 'view02', class: 'page page_hidden'}
, {  type: 'block', id: 'view03', class: 'page page_hidden'}
, {  type: 'block', id: 'view04', class: 'page page_hidden'}
, {  type: 'block', id: 'view05', class: 'page page_hidden'}
  ]}
];

/****
 * ビューのルート定義
 * @since 2019/3/5
 ****/
var view_root = {
  title: 'view root'
  , root: 'body'
  , child: [
    {  type: 'block'
     , id: 'app_header'
    }
  , {  type: 'block'
     , id: 'ap_contents'
    }]
};

/** ***********************************
 * アプリケーション
 */
function MyApp(apConfig) {
  this.apConfig = apConfig;
  this.event = {};
  this.fw = undefined;
};
/**
 * アプリケーションを開始する.
 * @since 2019/4/11
 */
MyApp.prototype.start = function(self) {
  var fw = self.fw;
  // ビューのルートを生成
  fw.make_views(fw, [view_root]);
  // ヘッダーを生成
  fw.make_views(fw, [app_header]);
  // ページの定義
  fw.make_views(fw, page_defs);
  // 各ページの展開
  fw.make_views(fw, view_defs);

  // アプリ定義で指定されたスタートページを表示
  var cf = self.apConfig;
  var elm = document.getElementById(cf.start_page_id);
  // console.log(cf.start_page_id);
  elm.classList.toggle(cf.page_deactivate_class);
  cf.active_page = elm;

  // ポップアップメニューのイベントを処理させる設定
  cf.other_view = document.getElementById('menu_body');
};
/**
 * 要素を隠す
 * @since 2019/4/16
 */
MyApp.prototype.hideElement = function(self, elmId) {
  var elm = document.querySelector('#'+elmId);
  elm.classList.add(self.apConfig.page_deactivate_class);
};
/**
 * 要素を表示する
 * @since 2019/4/16
 */
MyApp.prototype.showElement = function(self, elmId) {
  var elm = document.querySelector('#'+elmId);
  elm.classList.remove(self.apConfig.page_deactivate_class);
};
/**
 * 【アクティブページの切替】
 * data-page属性を持つ要素を指定して切替えを行う.
 * @since 2019/3/27
 */
MyApp.prototype.changePage = function(self, target) {
  // 切り替えるページIDをdata-page属性から取得
  var pgId = target.dataset.page;
  if (!pgId) {
    console.log('target not found(1) at changePage');
    return;
  }
  // ページ切り替え
  if (!self.changePageById(self, pgId)) {
    console.log('target not found(2) at changePage');
  }
};
/**
 * 【アクティブページの切替】
 * id属性を指定して切替えを行う.
 * @since 2019/4/28
 */
MyApp.prototype.changePageById = function(self, elmId) {
  var elm = self.fw.findElement(self.fw, elmId);
  if (!elm) {
    console.log(elmId + ' not found');
    return false;
  }
  // ページ切り替え
  self.changePageByElement(self, elm);
  return true;
};
/**
 * 【アクティブページの切替】
 * 要素オブジェクトを指定して切替えを行う.
 * @since 2019/4/28
 */
MyApp.prototype.changePageByElement = function(self, elm) {
  var cf = self.apConfig;
  // 指定のページをアクティブに設定
  elm.classList.toggle(cf.page_deactivate_class);
  // 現在のページを非アクティブに設定
  var curPg = self.apConfig.active_page;
  curPg.classList.toggle(cf.page_deactivate_class);
  // 指定のページ以外をディアクティブに設定
  cf.active_page = elm;
};
/**
 * ポップアップビューを表示する.
 * @since 2019/4/5
 */
MyApp.prototype.showPopup = function(self, tagDef) {
  var curtain = document.querySelector('#popup_bg');
  // ポップアップの内容をクリア
  //curtain.innerText = '';
  curtain.textContent = null;
  // ポップアップを生成
  self.fw.make_view(self.fw, {child: tagDef}, curtain);
  // ポップアップを表示
  var deact = self.apConfig.page_deactivate_class;
  curtain.classList.remove(deact);
  // 表示中のポップアップを設定
  self.apConfig.popup_view = curtain;
};
/**
 * ポップアップメニューを閉じる
 * @since 2019/3/27
 */
MyApp.prototype.EM_closePopup = function(self) {
  var curtain = document.querySelector('#popup_bg');
  curtain.classList.add(self.apConfig.page_deactivate_class);
  self.apConfig.popup_view = undefined;
};
/**
 * 現在の表示しているページのリセットを行う.
 * @since 2019/4/20
 */
MyApp.prototype.resetActivateForm = function(self) {
  var forms = self.apConfig.active_page.getElementsByTagName('form');
  forms[0].reset();
};
/**
 * プロジェクトの一覧を表示する.
 * （チケットの種類と消化状況も表示する。）
 * @since 2019/3/27
 */
MyApp.prototype.showProjectList = function(self, data) {
  var fw = self.fw;
  // 一覧のルート要素
  var wrapper = document.querySelector('#prj-list-wrapper');
  // ビューのクリア
  wrapper.textContent = null;

  // 一覧表示
  prjBoxes = [];
  for (var prj of data.body) {
    // プロジェクト全体
    var prjBox = {type: 'block', class: 'prj-list-box', child: []};
    prjBox.child.push({type: 'block', class: 'title', text: prj.id});
    prjBox.child.push({type: 'block', class: 'title', text: prj.name});
    prjBox.child.push({type: 'block', class: 'kind-count', text: prj.finish + '/' + prj.total});
    // チケットの種類
    if (prj.kinds && prj.kinds.length > 0) {
      for (var knd of prj.kinds) {
        prjBox.child.push({type: 'block', class: 'title', text: ''});
        prjBox.child.push({type: 'block', class: 'ticket-kind', text: knd.name});
        prjBox.child.push({type: 'block', class: 'kind-count', text: knd.finish + '/' + knd.total});
      }
    }
    prjBoxes.push(prjBox);
  }
  if (prjBoxes.length > 0) {
    self.fw.make_view(self.fw, {child: prjBoxes}, wrapper);
  }
};
/**
 * サーバ通信を行う
 * @since 2019/4/11
 */
MyApp.prototype.serverComm = function(self, path, body, proc) {
  var txData = {
     header: self.apConfig.request_header
   , body: body
  };
  self.fw.ajax(self.fw, {
    url: self.apConfig.server_uri + path
  , timeout: self.apConfig.comm_timer
  , req_data: txData
  , success: function(data) {
      //console.log(data);
      proc(self, data);
    }
  , failure: function(message) {
      console.log('project list failure');
      // todo 20190428 エラー処理の実装
    }
  });
};
/**
 * サーバにログイン準備要求を行う
 * @since 2019/4/13
 */
MyApp.prototype.EM_loginStart = function(self, target) {
  self.event['target'] = target;
  // サーバにログイン準備を要求する
  self.serverComm(self, 'login/prepare', {}, self.afterLoginPrepare);
};
/**
 * サーバからのログイン準備応答受信
 * @since 2019/4/13
 */
MyApp.prototype.afterLoginPrepare = function(self, rxData) {
  if (rxData.status.result === 'OK') {
    //console.log(rxData.body.session_id);
    // ログイン情報を編集
    var fw = self.fw;
    var vals = fw.findFormValues(fw, self.event['target']);
    // サーバにログイン情報を送信
    self.apConfig.request_header.session_id = rxData.body.session_id;
    self.serverComm(self, 'login', vals, self.afterLogin);
  } else {
    alert('ログインに失敗しました.');
  }
};
/**
 * サーバからのログイン応答受信
 * @since 2019/4/23
 */
MyApp.prototype.afterLogin = function(self, rxData) {
  if (rxData.status.result === 'OK') {
    //console.log(rxData.body.session_id);
    self.apConfig.request_header.session_id = rxData.body.session_id;
    alert('ログインしました.');
    self.resetActivateForm(self);
  } else {
    alert('ログインに失敗しました.');
  }
};
/**
 * プロジェクト一覧を表示する
 * @since 2019/4/11
 */
MyApp.prototype.EM_findAllProject01 = function(self, target) {
  // 画面遷移の情報を設定
  self.event['target'] = target;
  // サーバにプロジェクト一覧を要求する
  self.serverComm(self, 'project_list', '', self.projectList01);
};
/**
 * サーバから受信したデータでプロジェクト一覧を表示する.
 * @since 2019/4/11
 */
MyApp.prototype.projectList01 = function(self, rxData) {
  // 受信データでプロジェクト一覧を表示
  self.showProjectList(self, rxData);
  // ページ切替え
  self.changePage(self, self.event.target);
};
/**
 * ポップアップにプロジェクトの一覧を表示するため、
 * サーバにプロジェクト一覧取得のリクエストを送信
 * する
 * @since 2019/4/12
 */
MyApp.prototype.EM_findAllProject02 = function(self, target) {
  // 画面遷移の情報を設定
  self.event['target'] = target;
  // プロジェクト一覧をサーバに要求する
  self.serverComm(self, 'project_list', '', self.projectList02);
};
/**
 * プロジェクト一覧データ取得でプロジェクト一覧
 * ポップアップを表示する
 * @since 2019/4/12
 */
MyApp.prototype.projectList02 = function(self, rxData) {
  //console.log(rxData);
  var fw = self.fw;
  // ポップアップのガイダンスを設定
  var popDef = _vw_popup[1];
  var item = fw.findDictByKeyAndVal(fw, popDef, 'id', 'popup-01-guid');
  item['text'] = 'プロジェクトを選択';

  // 一覧の編集
  var lstBody = fw.findDictByKeyAndVal(fw, popDef, 'id', 'popup-01-data');
  var wrap = _popup_list_01;
  lstBody.child = [wrap];
  wrap.child = [];

  // 一覧を実装する要素
  if (rxData.body) {
    for (var prj of rxData.body) {
      // プロジェクトID
      wrap.child.push({type: 'p', text: prj.id, class: 'list_01_item_hide'});
      // プロジェクト名称
      wrap.child.push({type: 'p', text: prj.name});
    }
  } else {
    // todo 20190428
    // プロジェクトが未登録の場合、
    // プロジェクトの新規登録画面に
    // 遷移する
  }
  // ポップアップ画面の操作を設定
  self.event['operation_new'] = self.EM_showNewProject;
  self.event['operation_upd'] = self.EM_getProjectDetail;

  // ポップアップを表示
  self.showPopup(self, popDef);
};
/**
 * プロジェクトの新規登録画面を開く
 * プロジェクト一覧のポップアップから遷移する
 * @since 2019/4/12
 */
MyApp.prototype.EM_showNewProject = function(self) {
  self.hideElement(self, 'btn-upd-project');
  self.hideElement(self, 'project-upd-key');
  self.showElement(self, 'btn-new-project');

  self.changePage(self, self.event.target);
  self.resetActivateForm(self);
};
/**
 * プロジェクトの登録を行う
 * @since 2019/4/13
 */
MyApp.prototype.EM_newProject = function(self, vals) {
  // プロジェクト名の入力を確認
  if (vals.name == '') {
    alert('[必須]プロジェクト名を入力して下さい');
    return;
  }

  // リクエストデータの編集
  var nd = self.fw.splitLine(vals.name, 2);
  vals.name = nd[0];
  vals.description = nd[1];
  vals.alive = vals.alive ? 'on' : 'off';
  vals.opened = vals.opened ? 'on' : 'off';

  // サーバに新規プロジェクトの登録要求
  self.serverComm(self, 'new_project', vals, self.newProjectResult);
};
/**
 * プロジェクトの登録結果を処理する.
 * @since 2019/4/13
 */
MyApp.prototype.newProjectResult = function(self, rxData) {
  if (rxData.status.result === 'OK') {
    alert('プロジェクトを登録しました.');
    self.resetActivateForm(self);
  } else {
    alert('プロジェクトの登録失敗.\n\n' + rxData.status.message);
  }
};
/**
 * 一覧の選択を確認する.
 * @since 2019/4/18
 */
MyApp.prototype.EM_isListSelected = function(self) {
  var lstWrp = document.querySelector('#popup_list_01');
  var c = lstWrp.children;
  for (var idx = 1; idx < c.length; idx += 2) {
    var elm = c[idx];
    if (elm.classList.contains('popup-01-list-select')) {
      elm = c[idx-1];
      //console.log(elm.innerText);
      return elm.innerText;
    }
  }
  return undefined;
};
/**
 * サーバからプロジェクト詳細を処理する.
 * @since 2019/4/18
 */
MyApp.prototype.EM_getProjectDetail = function(self, pid) {
  var req = {project_id: Number(pid)};
  self.serverComm(self, 'project_detail', req, self.projectDetailResult);
};
/**
 * サーバからプロジェクトの詳細を受信で、
 * プロジェクトの詳細を表示する
 * @since 2019/4/19
 */
MyApp.prototype.projectDetailResult = function(self, rxData) {
  self.hideElement(self, 'btn-new-project');
  self.showElement(self, 'btn-upd-project');
  self.showElement(self, 'project-upd-key');

  // 受信データをビューに表示する
  var vals = rxData.body;
  vals.alive = vals.alive === 'on' ? true : false;
  vals.opened = vals.opened === 'on' ? true : false;
  if (vals.description) {
    vals.name = vals.name + '\n' + vals.description;
  }
  var elm = document.querySelector('#btn-upd-project');
  self.fw.storeFormValues(self.fw, elm, vals);

  // ページ切替え
  self.changePage(self, self.event.target);
  // ポップアップを閉じる
  self.EM_closePopup(self);
};
/**
 * プロジェクトの更新を行う
 * @since 2019/4/21
 */
MyApp.prototype.EM_editProject = function(self, vals) {
  // プロジェクト名の入力を確認
  if (vals.name == '') {
    alert('[必須]プロジェクト名を入力して下さい');
    return;
  }

  // リクエストデータの編集
  var nd = self.fw.splitLine(vals.name, 2);
  vals.name = nd[0];
  vals.description = nd[1];
  vals.alive = vals.alive ? 'on' : 'off';
  vals.opened = vals.opened ? 'on' : 'off';

  // サーバにプロジェクトの更新要求
  self.serverComm(self, 'edit_project', vals, self.editProjectResult);
};
/**
 * プロジェクトの更新結果を処理する.
 * @since 2019/4/21
 */
MyApp.prototype.editProjectResult = function(self, rxData) {
  if (rxData.status.result === 'OK') {
    alert('更新しました.');
  } else {
    alert('更新失敗.\n\n' + rxData.status.message);
  }
};
/**
 * プロジェクトのチケット情報を取得する.
 * @since 2019/4/26
 */
MyApp.prototype.EM_selectTicketProject = function(self, target, vals) {
  var pid = Number(vals.project_id);
  self.event['project_id'] = pid;
  self.event['project_name'] = vals.project_name;
  // サーバにチケット取得要求
  self.serverComm(self, 'ticket_list', {id: pid}
  , self.selectTicketProjectResult);
};
/**
 * プロジェクトのチケット情報取得結果を処理する.
  （ポップアップでチケット一覧を表示）
 * @since 2019/4/26
 */
MyApp.prototype.selectTicketProjectResult = function(self, rxData) {
  if (rxData.status.result !== 'OK') {
    alert('取得失敗.\n\n' + rxData.status.message);
  }
  var fw = self.fw;
  // ポップアップのガイダンスを設定
  var popDef = _vw_popup[1];
  var item = fw.findDictByKeyAndVal(fw, popDef, 'id', 'popup-01-guid');
  item['text'] = 'チケットを選択';

  // 一覧の編集
  var lstBody = fw.findDictByKeyAndVal(fw, popDef, 'id', 'popup-01-data');
  var wrap = _popup_list_01;
  lstBody.child = [wrap];
  wrap.child = [];

  // 一覧を実装する要素
  if (rxData.body) {
    for (var tkt of rxData.body) {
      // チケットID
      wrap.child.push({type: 'p', text: tkt.id, class: 'list_01_item_hide'});
      // チケット名称
      var ttl = '【' + tkt.status + '】' + tkt.title;
      wrap.child.push({type: 'p', text: ttl});
    }
  } else {
    // todo 20190428 チケット無しは、チケット登録画面委遷移する
  }
  // ポップアップ画面の操作を設定
  self.event['operation_new'] = self.EM_showNewTicket;
  self.event['operation_upd'] = self.EM_getTicketDetail;

  // ポップアップを表示
  self.showPopup(self, popDef);
};
/**
 * サーバからチケットマスタ情報を取得し、チケットの新規登録画面を開く
 * チケット一覧のポップアップから遷移する
 * @since 2019/4/27
 */
MyApp.prototype.EM_showNewTicket = function(self) {
  // サーバにチケットマスタ情報を要求
  var req = {project_id: self.event['project_id']};
  self.serverComm(self, 'ticket_master', req, self.ticketMasterResult);
};
/**
 * サーバからのチケットマスタ情報取得を処理する
 * @since 2019/4/27
 */
MyApp.prototype.ticketMasterResult = function(self, rxData) {
  if (rxData.status.result !== 'OK') {
    alert('チケットマスタ取得失敗.\n\n' + rxData.status.message);
  }
  // チケットメンテナンス画面の初期化
  self.showElement(self, 'btn-new-ticket');
  self.hideElement(self, 'ticket-upd-key');
  self.hideElement(self, 'btn-upd-ticket');
  // プロジェクト名の表示
  var pgElm = self.fw.findElement(self.fw, '#view04');
  var name = pgElm.querySelectorAll('.read_only');
  name[0].innerText = self.event['project_name'];
  // セレクタの初期化
  self.initTicketSelector(self, pgElm, rxData.body.master);

  // 画面の切替え
  self.changePageByElement(self, pgElm);
  self.resetActivateForm(self);
};
/**
 * チケットメンテナンス画面のセレクタを初期化する
 * @since 2019/4/30
 */
MyApp.prototype.initTicketSelector = function(self, pgElm, mstData) {
  var optList = pgElm.querySelectorAll('select');
  var fw = self.fw;
  for (var elm of optList) {
    if (elm.name === 'kind_id') {
      self.setSelectorOptions(fw, elm, mstData.kind);
    } else if (elm.name === 'priority_id') {
      self.setSelectorOptions(fw, elm, mstData.priority);
    } else if (elm.name === 'status_id') {
      self.setSelectorOptions(fw, elm, mstData.status);
    } else if (elm.name === 'progress_id') {
      self.setSelectorOptions(fw, elm, mstData.progress);
    }
  }
};
/**
 * セレクターにオプションを設定する.
 * @since 2019/4/27
 */
MyApp.prototype.setSelectorOptions = function(fw, elm, vals) {
  elm.textContent = null;
  var attr = {value: undefined, text: ''};
  var opt = fw.createSelectorOption(fw, attr);
  elm.appendChild(opt);
  for (var item of vals) {
    attr = {value: Number(item.id), text: item.name};
    opt = fw.createSelectorOption(fw, attr);
    elm.appendChild(opt);
  }
  elm.selectedIndex = 0;
};
/**
 * チケットの登録を行う
 * @since 2019/4/28
 */
MyApp.prototype.EM_newTicket = function(self, vals) {
  // チケットタイトルの入力を確認
  if (vals.title == '') {
    alert('[必須]チケットタイトルを入力して下さい');
    return;
  }
  // リクエストデータの編集
  vals = self.editTicketRequest(self, vals);
  // サーバにチケットの登録要求
  self.serverComm(self, 'new_ticket', vals, self.newTicketResult);
};
/**
 * チケットデータの編集を行う.
 * @since 2019/4/30
 */
MyApp.prototype.editTicketRequest = function(self, vals) {
  vals['project_id'] = self.event['project_id'];
  var nd = self.fw.splitLine(vals.title, 2);
  vals.title = nd[0];
  vals.description = nd[1];
  for (key in vals) {
    if (vals[key] === 'undefined') {
      vals[key] = null;
    } else if (vals[key] === '') {
      vals[key] = null;
    }
  }
  return vals;
};
/**
 * チケットの登録結果を処理する.
 * @since 2019/4/28
 */
MyApp.prototype.newTicketResult = function(self, rxData) {
  if (rxData.status.result === 'OK') {
    alert('チケットを登録しました.');
    self.resetActivateForm(self);
  } else {
    alert('チケットの登録失敗.\n\n' + rxData.status.message);
  }
};
/**
 * サーバからチケット詳細を取得する.
 * @since 2019/4/30
 */
MyApp.prototype.EM_getTicketDetail = function(self, tid) {
  console.log('todo EM_getTicketDetail');
  // todo 20190428 実装
  var req = {id: Number(tid)};
  self.serverComm(self, 'ticket_detail', req, self.ticketDetailResult);
};
/**
 * サーバからのチケット詳細を受信で、
 * チケット詳細を表示する
 * @since 2019/4/30
 */
MyApp.prototype.ticketDetailResult = function(self, rxData) {
  // チケットメンテナンス画面の初期化
  self.hideElement(self, 'btn-new-ticket');
  self.showElement(self, 'ticket-upd-key');
  self.showElement(self, 'btn-upd-ticket');
  // プロジェクト名の表示
  var pgElm = self.fw.findElement(self.fw, '#view04');
  var name = pgElm.querySelectorAll('.read_only');
  name[0].innerText = self.event['project_name'];
  // セレクタの初期化
  self.initTicketSelector(self, pgElm, rxData.body.master);

  // todo 初期表示
  tinfo = rxData.body.ticket;
  if (tinfo.description) {
    tinfo.title = tinfo.title + '\n' + tinfo.description;
  }
  var elm = document.querySelector('#btn-upd-ticket');
  self.fw.storeFormValues(self.fw, elm, tinfo);

  // 画面の切替え
  self.changePageByElement(self, pgElm);
  // ポップアップを閉じる
  self.EM_closePopup(self);
};
/**
 * チケットの更新を行う
 * @since 2019/4/30
 */
MyApp.prototype.EM_editTicket = function(self, vals) {
  // チケットタイトルの入力を確認
  if (vals.title == '') {
    alert('[必須]チケットタイトルを入力して下さい');
    return;
  }

  // リクエストデータの編集
  vals = self.editTicketRequest(self, vals);
  // サーバにプロジェクトの更新要求
  self.serverComm(self, 'edit_ticket', vals, self.editTicketResult);
};
/**
 * チケットの更新結果を処理する.
 * @since 2019/4/30
 */
MyApp.prototype.editTicketResult = function(self, rxData) {
  if (rxData.status.result === 'OK') {
    alert('チケットを更新しました.');
    self.resetActivateForm(self);
  } else {
    alert('チケットの更新失敗.\n\n' + rxData.status.message);
  }
};
/**
 * チケット履歴取得をサーバに要求する.
 * @since 2019/5/8
 */
MyApp.prototype.EM_showTicketHistory = function(self, vals) {
  // チケットIDを取得
  req = {id: vals.id};
  // サーバに履歴の要求
  self.serverComm(self, 'ticket_history', req, self.ticketHistoryResult);
};
/**
 * 指定配列に指定キーで同一値のオブジェクトを検索する.
 * @since 2019/5/10
 */
MyApp.prototype.hasSameValue = function(list, item, key) {
  for (var rec of list) {
    if (rec[key] == item[key]) return rec;
  }
  return undefined;
};
/**
 * 親ノードに子ノードを登録する.
 * @since 2019/5/10
 */
MyApp.prototype.addToParentBranch = function(self, node, item, key) {
  if (node.id == item[key]) {
    item.child = [];
    item.elmDef = self.createHistoryItemElement(self, item);
    node.child.push(item);
    return true;
  }
  for (var rec of node.child) {
    if (rec.id == item[key]) {
      item.child = [];
      item.elmDef = self.createHistoryItemElement(self, item);
      rec.child.push(item);
      return true;
    } else if (rec.child.length > 0) {
      return self.addToParentBranch(self, rec, item, key);
    }
  }
};
/**
 * チケットメモ(履歴)に作成する要素定義を作成する.
 * @since 2019/5/11
 */
MyApp.prototype.createHistoryItemElement = function(self, item) {
  // return {type: 'block', text: item.memo, child: []};
  return {type: 'block', class: 'hist-item', child: [
      {  type: 'p', text: item.memo}
    , {  type: 'block', class: 'hist-item-remark-body'
       , child: [
          {  type: 'span', class: 'hist-item-remark'
           , text: '作成者 : ' + item.create_user}
        , {  type: 'span', class: 'hist-item-remark'
           , text: '作成日時 : ' + item.create_date}
     ]}
  ]};
};
/**
 * チケットメモ(履歴)に作成する要素(子ノード)定義を作成する.
 * @since 2019/5/11
 */
MyApp.prototype.addElementToParentBranch = function(self, item) {
  for (var rec of item.child) {
    item.elmDef.child.push(rec.elmDef);
    if (rec.child.length > 0) {
      self.addElementToParentBranch(self, rec);
    }
  }
};
/**
 * チケット履歴取得結果処理するをする.
 * @since 2019/5/9
 */
MyApp.prototype.ticketHistoryResult = function(self, rxData) {
  // 履歴の親子関係を構築する
  var tr = [];
  for (var rec of rxData.body) {
    //console.log(rec);
    // ルートを検索
    var rr = self.hasSameValue(tr, rec, 'root_id');
    if (rr) {
      self.addToParentBranch(self, rr, rec, 'parent_id');
    } else {
      rec.child = [];
      rec.elmDef = self.createHistoryItemElement(self, rec);
      tr.push(rec);
    }
  }
  // 要素作成定義を作成する.
  var histDef = [];
  for (var rec of tr) {
    histDef.push(rec.elmDef);
    if (rec.child.length > 0) {
      self.addElementToParentBranch(self, rec);
    }
  }
  // メモの一覧をビューに設定する
  var wrapper = self.fw.findElement(self.fw, '#hist-list-body');
  wrapper.textContent = null;
  self.fw.make_view(self.fw, {child: histDef}, wrapper);

  // ビューを切り替える（履歴一覧をアクティブにする）
  self.changePageById(self, '#view05');
};
/**
 * チケット履歴画面を閉じて、チケットメンテ画面に
 * 遷移する.
 * @since 2019/5/10
 */
MyApp.prototype.EM_closeTicketHistory = function(self) {
  // チケットメンテ画面をアクティブにする
  self.changePageById(self, '#view04');
};



/***************************************
 * イベントマップ
 */
var _evtMap = [];
/**
 * 【イベント定義】アプリケーションの開始
 * @since 2019/4/6
 */
_evtMap.push({
   type: 'load'
, process: function(fw, evt, app) {
    app.start(app);
  }
});
/**
 * 【イベント定義】ログインボタン押下
 * @since 2019/4/13
 */
_evtMap.push({
  // ログインボタン
   type: 'click'
 , id_targets: ['btn-login']
 , process: function(fw, evt, target, app) {
     //console.log('start login');
     app.EM_loginStart(app, target);
   }
});
/**
 * 【イベント定義】ハンバーガーアイコン押下
 * @since 2019/4/6
 */
_evtMap.push({
  type: 'click'
, id_targets: ['humberger']
, process: function(fw, evt, target, app) {
    if (app.apConfig.popup_view) {
      // ポップアップ表示中は、ポップを閉じる
      app.EM_closePopup(app);
    } else {
      // ポップアップメニューを表示する
      app.showPopup(app, _vw_popup[0]);
    }
  }
});
/**
 * 【イベント定義】ポップアップメニューの
 * 「プロジェクト」メンテ選択
 * @since 2019/4/6
 */
_evtMap.push({
  type: 'click'
, id_targets: ['hm_p_stat']
, process: function(fw, evt, target, app) {
    app.EM_findAllProject02(app, target);
  }
});
/**
 * 【イベント定義】ポップアップメニューのチケット
 * 「プロジェクト」を選択
 * @since 2019/4/27
 */
_evtMap.push({
  type: 'click'
, id_targets: ['hm_project']
, process: function(fw, evt, target, app) {
    // プロジェクト一覧を取得
    app.EM_findAllProject01(app, target);
    // ポップアップニューを閉じる
    app.EM_closePopup(app);
  }
});
/**
 * 【イベント定義】ポップアップメニューの
 * 「プロジェクト」メンテ以外を選択
 * @since 2019/4/27
 */
_evtMap.push({
  type: 'click'
, id_targets: ['hm_search', 'hm_user' , 'hm_role', 'hm_t_stat', 'hm_t_kind', 'hm_t_prgs', 'hm_t_pri']
, process: function(fw, evt, target, app) {
    // ページ切り替え
    app.changePage(app, target);
    // ポップアップニューを閉じる
    app.EM_closePopup(app)
  }
});







/**
 * 【イベント定義】ポップアップの一覧選択
 * @since 2019/4/8
 */
_evtMap.push({
// ポップアップのリストを選択
  type: 'click'
, id_targets: ['popup-01-data']
, process: function(fw, evt, target, app) {
    var y = evt.clientY;
    //console.log('y : ' + y);
    var c = target.firstElementChild;
    for (var idx = 1; idx < c.children.length; idx += 2) {
      var elm = c.children[idx];
      var rect = elm.getBoundingClientRect();
      if ((rect.top <= y) && (y <= rect.bottom)) {
        //console.log(elm.innerText);
        elm.classList.add('popup-01-list-select');
      } else {
        elm.classList.remove('popup-01-list-select');
      }
    }
  }
});
/**
 * 【イベント定義】ポップアッププロジェクト一覧の項目選択
 * @since 2019/4/26
 */
_evtMap.push({
  type: 'click'
, class_targets: ['prj-list-box']
, process: function(fw, evt, target, app) {
    var vals = {};
    var elm = target.firstElementChild;
    vals.project_id = Number(elm.innerText);
    elm = elm.nextElementSibling;
    vals.project_name = elm.innerText;
    //console.log(pid + ' : ' + pname);
    app.EM_selectTicketProject(app, target, vals);
  }
});
/**
 * 【イベント定義】一覧ポップアップの「新規」ボタン押下
 * @since 2019/4/8
 */
_evtMap.push({
  type: 'click'
, id_targets: ['popup-01-new']
, process: function(fw, evt, target, app) {
    // プロジェクトの新規登録画面を開く
    app.event['operation_new'](app);
    // ポップアップを閉じる
    app.EM_closePopup(app);
  }
});
/**
 * 【イベント定義】プロジェクト一覧ポップアップの
 * 「更新」ボタン押下
 * @since 2019/4/18
 */
_evtMap.push({
  type: 'click'
, id_targets: ['popup-01-update']
, process: function(fw, evt, target, app) {
    var did = app.EM_isListSelected(app);
    if (!did) {
       alert('更新対象を選択してください.');
       return;
    }
    // サーバからプロジェクトの詳細を取得
    app.event['operation_upd'](app, did);
  }
});
/**
 * 【イベント定義】プロジェクトメンテナンス画面の
 * 「登録」ボタン押下
 * @since 2019/4/13
 */
_evtMap.push({
  type: 'click'
, id_targets: ['btn-new-project']
, process: function(fw, evt, target, app) {
    // プロジェクトの登録
    var vals = fw.findFormValues(fw, target);
    app.EM_newProject(app, vals);
  }
});
/**
 * 【イベント定義】プロジェクトメンテナンス画面の
 * 「更新」ボタン押下
 * @since 2019/4/21
 */
_evtMap.push({
  type: 'click'
, id_targets: ['btn-upd-project']
, process: function(fw, evt, target, app) {
    // プロジェクトの更新
    var vals = fw.findFormValues(fw, target);
    app.EM_editProject(app, vals);
  }
});
/**
 * 【イベント定義】チケットメンテナンス画面の
 * 「登録」ボタン押下
 * @since 2019/4/28
 */
_evtMap.push({
  type: 'click'
, id_targets: ['btn-new-ticket']
, process: function(fw, evt, target, app) {
    // チケットの登録
    var vals = fw.findFormValues(fw, target);
    app.EM_newTicket(app, vals);
  }
});
/**
 * 【イベント定義】チケットメンテナンス画面の
 * 「更新」ボタン押下
 * @since 2019/4/30
 */
_evtMap.push({
  type: 'click'
, id_targets: ['btn-upd-ticket']
, process: function(fw, evt, target, app) {
    // チケットの更新
    var vals = fw.findFormValues(fw, target);
    app.EM_editTicket(app, vals);
  }
});

//
/**
 * 【イベント定義】チケットメンテナンス画面の
 * 履歴「表示」ボタン押下
 * @since 2019/5/8
 */
_evtMap.push({
  type: 'click'
, id_targets: ['btn-ticket-hist']
, process: function(fw, evt, target, app) {
    var vals = fw.findFormValues(fw, target);
    app.EM_showTicketHistory(app, vals);
  }
});
/**
 * 【イベント定義】履歴画面の「閉じる」ボタン押下
 * @since 2019/5/10
 */
_evtMap.push({
  type: 'click'
, id_targets: ['btn-hist-close']
, process: function(fw, evt, target, app) {
    app.EM_closeTicketHistory(app);
  }
});



//_evtMap.push({});


/**
 * アプリの定義
 * @since 2019/3/5
 */
var _ap_config = {
  // ページの一覧を定義する
  //page_id_list: ['login', 'ajax-test', 'view01', 'view02', 'view03']
  // 開始ページを定義する
  start_page_id: 'login'
  // ページの表示／非表示を切り替えるスタイルを定義する
, page_deactivate_class: 'page_hidden'
  // イベントを定義する
, event_map: _evtMap
  // アクティブなページを保持する
, active_page: undefined
  // ポップアップビューを保持する
, popup_view: undefined
  // その他のビュー
, other_view: undefined

, server_uri: 'http://192.168.3.197/ticket_svr/'
/*
, server_uri: 'http://192.168.3.197/ticket_svr/'
, server_uri: 'http://127.0.0.1:8080/'
*/
, request_header: {app_name:'Ticket Lite for Web', app_ver: '0.0.1', session_id: undefined}
, comm_timer: 10000

  // デバッグ
, isDebug: true
};

var myApp = new MyApp(_ap_config);






/**********************
 * フレームワークLite
 * @param {アプリケーションオブジェクト} app
 * @ver 0.0.2
 * 2019/3/2 イベントハンドラとフォーム自動生成をマージ
 */
function FwLite(app) {
  this.app = app;
  app.fw = this;
};
/**
 * 先頭から指定行で分割する.
 * @since 2019/4/15
 */
FwLite.prototype.splitLine = function(source, lnCnt) {
  var wk = source.split(/\r\n|\n/);
  var wkln = wk.length;
  if (lnCnt == wkln) {
    return wk;
  } else if (wkln < lnCnt) {
    for (var i=0; i<(lnCnt-wkln); ++i) {
      wk.push('');
    }
    return wk;
  }
  var r = [];
  for (var i=1; i<lnCnt; ++i) {
    r.push(wk.shift());
  }
  r.push(wk.join('\n'));
  return r;
};
/**
 * formの値を取得する.
 * @param {このフレームワーク} self
 * @param {formタグまたは親タグ} pElm
 * @param {値を追加する連想配列} vals
 * @return キー(name)、値(value)の連想配列
 * @since 2019/4/16
 */
FwLite.prototype.getFormValues = function(self, pElm, vals) {
  for (var idx = 0; idx < pElm.children.length; ++idx) {
    var elm = pElm.children[idx];
    if (elm.name) {
      // console.log(elm.name + ' : ' + elm.value);
      if (elm.type.toLowerCase() === 'checkbox') {
        vals[elm.name] = elm.checked;
      } else {
        vals[elm.name] = elm.value;
      }
    }
    if (elm.firstElementChild) {
      vals = self.getFormValues(self, elm, vals);
    }
  }
  return vals;
};
/**
 * formに値を設定する.
 * @param {このフレームワーク} self
 * @param {formタグまたは親タグ} pElm
 * @param {値を設定する連想配列} vals
 * @since 2019/4/19
 */
FwLite.prototype.setFormValues = function(self, pElm, vals) {
  var list = pElm.querySelectorAll('[name]');
  list.forEach(function(elm) {
    if (elm.name in vals) {
      if (elm.type.toLowerCase() === 'checkbox') {
        elm.checked = vals[elm.name];
      } else {
        elm.value = vals[elm.name];
      }
    }
  });
};
/**
 * 指定のキーと値を持った連想配列を探す.
 * @param {このフレームワーク} self
 * @param {連想配列オブジェクトの配列} ary
 * @param {検索対象キー} key
 * @param {検索対象の値} val
 * @since 2019/4/8
 */
FwLite.prototype.findDictByKeyAndVal = function(self, ary, key, val) {
  for (var item of ary) {
    if (key in item) {
      if (item[key] == val) return item;
    }
  }
  if ('child' in item) {
    return self.findDictByKeyAndVal(self, item.child, key, val);
  }
  return undefined;
};
/**
 * タグを検索する.
 * @param {検索を開始するタグ} startTag
 * @param {検索するタグ名称} tagName
 * @since 2019/4/19
 */
FwLite.prototype.findParentTag = function(startTag, tagName) {
  if (tagName === startTag.nodeName.toLowerCase()) {
    return startTag;
  } else {
    // form要素を検索
    var fElm = startTag.parentNode;
    while (tagName !== fElm.nodeName.toLowerCase())
      fElm = fElm.parentNode;
  }
  return fElm;
};
/**
 * 指定要素を含むformのデータを取得する.
 * @param {このフレームワーク} self
 * @param {formに含まれる要素} tag
 * @return キー(name)、値(value)の連想配列
 * @since 2019/4/16
 */
FwLite.prototype.findFormValues = function(self, tag) {
  // console.log('current nodeName : ' + tag.nodeName.toLowerCase());
  var fElm = self.findParentTag(tag, 'form');
  return self.getFormValues(self, fElm, {});
};
/**
 * 指定の値をformに設定する.
 * @since 2019/4/19
 */
FwLite.prototype.storeFormValues = function(self, tag, vals) {
  // console.log('current nodeName : ' + tag.nodeName.toLowerCase());
  var fElm = self.findParentTag(tag, 'form');
  return self.setFormValues(self, fElm, vals);
};
  /**
 * 指定の要素に属性を設定する.
 * @param elm 属性を設定する要素
 * @param attr 設定する属性
 * @return 要素（elm）
 * @since 2019/3/1
 */
FwLite.prototype.setAttributes = function(elm, attr) {
  if ('class' in attr) {
    elm.classList = attr.class;
  }
  if ('id' in attr) {
    elm.id = attr.id;
  }
  if ('data' in attr) {
    var dt = attr.data;
    for (key in dt) {
      elm.dataset[key] = dt[key];
    }
  }
  return elm;
};
/**
 * 指定の入力要素に属性を設定する.
 * @param elm 属性を設定する要素
 * @param attr 設定する属性
 * @return 要素（elm）
 * @since 2019/3/16
 */
FwLite.prototype.setInputAttributes = function(elm, attr) {
  if ('name' in attr) {
    elm.name = attr.name;
  }
  if ('readonly' in attr) {
    elm.readOnly = attr.readonly;
  }
  return elm;
};
/**
 * 要素を生成する.
 * @param {このフレームワーク} self
 * @param {生成する要素名称} elmName
 * @param {属性} attr
 * @return 生成した要素
 * @since 2019/3/1
 */
FwLite.prototype.createElement = function(self, elmName, attr) {
  var elm = document.createElement(elmName);
  if (attr) return self.setAttributes(elm, attr);
  return elm;
};
/**
 * ブロック要素を生成する.
 * @param {このフレームワーク} self
 * @param {ブロック要素に設定する属性} attr 
 * @return DIV要素
 * @since 2019/3/1
 */
FwLite.prototype.createBlockElement = function(self, attr) {
  var elm = self.createElement(self, 'div', attr);
  if ('text' in attr) elm.innerText = attr.text;
  return elm;
};
/**
 * フォーム要素を生成する.
 * @param {このフレームワーク} self
 * @param {フォーム要素に設定する属性} attr 
 * @return FORM要素
 * @since 2019/3/1
 */
FwLite.prototype.createFormElement = function(self, attr) {
  var elm = self.createElement(self, 'form', attr);
  if ('action' in attr) elm.action = attr.action;
  return elm;
};
/**
 * 入力要素を生成する.
 * @param {このフレームワーク} self
 * @param {入力要素に設定する属性} attr 
 * @param {入力要素タイプ} inpType 
 * @return INPUT要素
 * @since 2019/3/1
 */
FwLite.prototype.createInputElement = function(self, attr, inpType) {
  var elm = self.createElement(self, 'input', attr);
  self.setInputAttributes(elm, attr);
  elm.type = inpType;
  if ('placeholder' in attr) elm.placeholder = attr.placeholder;
  if ('value' in attr) elm.value = attr.value;
  if ('readonly' in attr) elm.readOnly = attr.readonly;
  return elm;
};
/**
 * 複数行入力要素を生成する.
 * @param {このフレームワーク} self
 * @param {入力要素に設定する属性} attr
 * @return TEXTAREA要素
 * @since 2019/4/1
 */
FwLite.prototype.createTextareaElement = function(self, attr, inpType) {
  var elm = self.createElement(self, 'textarea', attr);
  self.setInputAttributes(elm, attr);
  if ('placeholder' in attr) elm.placeholder = attr.placeholder;
  if ('value' in attr) elm.value = attr.value;
  if ('readonly' in attr) elm.readOnly = attr.readonly;
  elm.rows = attr.rows;
  return elm;
};
/**
 * チェックボックス要素を生成する.
 * @param {このフレームワーク} self
 * @param {入力要素に設定する属性} attr
 * @return {親要素}
 * @since 2019/3/12
 */
FwLite.prototype.createCheckboxElement = function(self, attr) {
  var pElm = self.createBlockElement(self, {});
  var elm = self.createElement(self, 'input', attr);
  elm.type = 'checkbox';
  self.setInputAttributes(elm, attr);
  if (attr.checked) elm.checked = true;
  pElm.appendChild(elm);
  if ('cbx_label' in attr) {
    var lblAttr = {text: attr.cbx_label.text};
    if ('id' in attr) lblAttr['for'] = attr.id;
    pElm.appendChild(self.createLabelElement(self, lblAttr));
  }
  return pElm;
};
/**
 * ラベル要素を生成する.
 * @param {このフレームワーク} self
 * @param {ラベル要素に設定する属性} attr 
 * @return LABEL要素
 * @since 2019/3/1
 */
FwLite.prototype.createLabelElement = function(self, attr) {
  var elm = self.createElement(self, 'label', attr);
  if ('for' in attr) elm.htmlFor = attr.for;
  elm.innerText = attr.text;
  return elm;
};
/**
 * ラベル要素を生成する.
 * @param {このフレームワーク} self
 * @param {ラベル要素に設定する属性} attr 
 * @return LABEL要素
 * @since 2019/3/12
 */
FwLite.prototype.createFormLabelElement = function(self, attr) {
  var lblAttr = attr.label;
  if ('id' in attr) lblAttr.for = attr.id;
  return self.createLabelElement(self, lblAttr);
};
/**
 * 日付入力要素を生成する.
 * @param {このフレームワーク} self
 * @param {日付入力要素に設定する属性} attr
 * @return 日付入力要素
 * @since 2019/3/13
 */
FwLite.prototype.createInputDateElement = function(self, attr) {
  var elm = self.createElement(self, 'input', attr);
  elm.type = 'date';
  self.setInputAttributes(elm, attr);
  if ('placeholder' in attr) {
    elm.placeholder = attr.placeholder;
  }
  if ('value' in attr) {
    elm.value = attr.value;
  }
  return elm;
};
/**
 * ボタン要素を生成する.
 * @param {このフレームワーク} self
 * @param {ボタンに設定する属性} attr 
 * @param {ボタンの種類（submit, reset）} type 
 * @return ボタン要素
 * @since 2019/3/1
 */
FwLite.prototype.createButtonElement = function(self, attr, type) {
  var elm = self.createElement(self, 'button', attr);
  elm.type = type;
  if ('text' in attr) elm.innerText = attr.text;
  return elm;
};
/**
 * 定義・説明リストを生成する.
 * @param {このフレームワーク} self
 * @param {定義・説明リストに設定する属性} attr 
 * @return 定義・説明リスト
 * @since 2019/3/3
 */
FwLite.prototype.createDefinitionList = function(self, attr) {
  // リストの親要素を生成
  var elm = self.createElement(self, 'dl', attr);
  // タイトルとタイトルに紐づく項目を生成
  for (chunk of attr.child) {
    // タイトルを生成
    var dt = self.createElement(self, 'dt', chunk);
    dt.innerText = chunk.text;
    elm.appendChild(dt);
    // 項目を生成
    for (item of chunk.items) {
      var dd = self.createElement(self, 'dd', item);
      dd.innerText = item.text;
      elm.appendChild(dd);
    }
  }
  return elm;
};
/**
 * オプション要素を生成する.
 * @since 2019/4/28
 */
FwLite.prototype.createSelectorOption = function(self, attr) {
  var opt = self.createElement(self, 'option', attr);
  opt.value = attr.value;
  opt.innerText = attr.text;
  return opt;
};
/**
 * セレクタ（コンボボックス）を生成する.
 * @param {このフレームワーク} self
 * @param {属性} attr
 * @since 2019/4/2
 */
FwLite.prototype.createSelectorElement = function(self, attr) {
  var elm = self.createElement(self, 'select', attr);
  self.setInputAttributes(elm, attr);
  for (var optItm of attr.options) {
    var opt = self.createSelectorOption(self, optItm);
    // var opt = self.createElement(self, 'option', optItm);
    // opt.value = optItm.value;
    // opt.innerText = optItm.text;
    elm.appendChild(opt);
  }
  return elm;
};
/**
 * ビューを生成する.
 * @param {このフレームワーク} self
 * @param {ビュー定義} vw
 * @param {親要素} pelm
 * @since 2019/3/1
 */
FwLite.prototype.make_view = function(self, vw, pelm) {
  var rootElm;
  if ('root' in vw) {
    rootElm = document.getElementById(vw.root);
  } else{
    rootElm = pelm;
  }
  var elm;
  for (pt of vw.child) {
    var ptTyp = pt.type;
    if (ptTyp == 'block') {
      elm = self.createBlockElement(self, pt);
    } else if (ptTyp == 'form') {
      elm = self.createFormElement(self, pt);
    } else if (ptTyp == 'inp-text') {
      if ('rows' in pt) {
        elm = self.createTextareaElement(self, pt);
      } else {
        elm = self.createInputElement(self, pt, 'text');
      }
    } else if (ptTyp == 'inp-passwd') {
      elm = self.createInputElement(self, pt, 'password');
    } else if (ptTyp == 'inp-cbx') {
      elm = self.createCheckboxElement(self, pt);
    } else if (ptTyp == 'inp-date') {
      elm = self.createInputDateElement(self, pt);
    } else if (ptTyp == 'inp-submit') {
      elm = self.createButtonElement(self, pt, 'button');
    } else if (ptTyp == 'inp-reset') {
      elm = self.createButtonElement(self, pt, 'reset');
    } else if (ptTyp == 'inp-button') {
      elm = self.createButtonElement(self, pt, 'button');
    } else if (ptTyp == 'inp-select') {
      elm = self.createSelectorElement(self, pt);

    } else if (ptTyp == 'def-list') {
      elm = self.createDefinitionList(self, pt);
      rootElm.appendChild(elm);
      continue;   /* dl内のChildは、処理済み */
    } else {
      elm = self.createElement(self, ptTyp, pt);
      if ('text' in pt) elm.innerText = pt.text;
    }
    if ('label' in pt) {
      var lblElm = self.createFormLabelElement(self, pt);
      rootElm.appendChild(lblElm);
    }
    if ('child' in pt) {
      // 再帰呼び出し
      self.make_view(self, pt, elm);
    }
    rootElm.appendChild(elm);
  }
};
/**
 * ビューを生成する.
 * @param {このフレームワーク} self
 * @param {全てのビュー定義} defs
 * @since 2019/3/1
 */
FwLite.prototype.make_views = function(self, defs) {
  for (vw of defs) {
    console.log('make [' + vw.title + ']');
    self.make_view(self, vw);
  }
};
/**
 * 指定領域に座標が含まれるかを判定する.
 * @param {x 座標} x
 * @param {y 座標} y
 * @param {領域を表すオブジェクト} elmRect
 * @since 2019/3/10
 */
FwLite.prototype.inRect = function(x, y, elmRect) {
  var x2 = elmRect.x + elmRect.width;
  var y2 = elmRect.y + elmRect.height;
  if ((elmRect.x <= x) && (x <= x2)
   && (elmRect.y <= y) && (y <= y2)) {
     return true;
   }
   return false;
};
/**
 * イベント情報とイベント処理マップが一致する
 * 関数を起動する.
 * @param {このフレームワーク} self
 * @param {イベントオブジェクト} evt
 * @param {要素オブジェクト} elm
 * @since 0.0.1 (2019/02/16)
 */
FwLite.prototype.evtExecuterById = function(self, evt, elm) {
  var id = elm.id;
  for (var item of self.app.apConfig.event_map) {
    if ('id_targets' in item) {
      if (item.id_targets.indexOf(id) != -1) {
        console.log('start id:'+id);
        item.process(self, evt, elm, self.app);
        self.evtExecFlag = true;
      }
    }
  }
};
/**
 * イベント情報とイベント処理マップが一致する
 * 関数を起動する.
 * @param {このフレームワーク} self
 * @param {イベントオブジェクト} evt
 * @param {要素オブジェクト} elm
 * @since 0.0.1 (2019/02/16)
 */
FwLite.prototype.evtExecuterByClass = function(self, evt, elm) {
  var clsList = elm.classList;
  for (var item of self.app.apConfig.event_map) {
    if ('class_targets' in item) {
      for (var cls of item.class_targets) {
        if (clsList.contains(cls)) {
          item.process(self, evt, elm, self.app);
          self.evtExecFlag = true;
        }
      }
    }
  }
};
/**
 * 座標系によるイベントを処理する.
 * @param {このフレームワーク} self
 * @param {イベントオブジェクト} evt
 * @param {親要素} pElm
 * @since 2019/3/10
 */
FwLite.prototype.executeEventByXY = function(self, evt , pElm) {
  for (var idx = 0; idx < pElm.children.length; ++idx) {
    var elm = pElm.children[idx];
    if (elm.clientHeight == 0 || elm.clientWidth == 0) continue;
    var rect = elm.getBoundingClientRect();
    if (self.inRect(evt.clientX, evt.clientY, rect)) {
      if (elm.id) {
        self.evtExecuterById(self, evt, elm);
      } else if (elm.classList.length > 0) {
        self.evtExecuterByClass(self, evt, elm);
      }
    }
    if (elm.children) {
      self.executeEventByXY(self, evt, elm);
    }
  }
};
/**
 * addEventListenerから呼び出され、
 * イベント処理マップに従った処理を実行する.
 * @param {このフレームワーク} self
 * @param {イベントオブジェクト} evt
 * @since 0.0.1 (2019/02/16)
 */
FwLite.prototype.evtCatcher = function(self, evt) {
  // console.log(evt.type);
  if (evt.type == 'load') {
    self.executeEventByType(self, evt);
  } else {
    //var elm = document.querySelector('#body');
    //self.executeEventByXY(self, evt, elm);
    self.evtExecFlag = false;
    // ポップアップメニューの対象要素を処理
    var elm = self.app.apConfig.popup_view;
    if (elm) {
      self.executeEventByXY(self, evt, elm);
      if (self.evtExecFlag)  return;
    }
    // アクティブページの対象要素を処理
    var elm = self.app.apConfig.active_page;
    if (elm) {
      self.executeEventByXY(self, evt, elm);
      if (self.evtExecFlag)  return;
    }
    // その他ビューの対象要素を処理
    var elm = self.app.apConfig.other_view;
    if (elm) {
      self.executeEventByXY(self, evt, elm);
      if (self.evtExecFlag)  return;
    }
  }
};
/**
 * イベントタイプによるイベントの処理を行う.
 * @param {このフレームワーク} self
 * @param {イベントオブジェクト} evt
 * @since 2019/3/10
 */
FwLite.prototype.executeEventByType = function(self, evt) {
  for (var item of self.app.apConfig.event_map) {
    // イベント処理マップを検索
    if (evt.type == item.type) {
      // イベントの種類で実行
      item.process(self, evt, self.app);
    }
  }
};
/**
 * イベントの準備を行う.
 * @param {このフレームワーク} self
 * @since 0.0.1 (2019/02/16)
 * 2019/03/07 イベントマップからイベントの種類を取得
 */
FwLite.prototype.prepare = function(self) {
  // 通信に関する設定
  self._ajax = {
      status: 'idle'
    , que: new Array()
  };
  // 操作イベントに関する設定
  tl = self.keyList(self.app.apConfig.event_map, 'type');
  //console.log(tl);
  var bodyElm = document.querySelector('#body');
  if (tl.indexOf('load') >= 0) {
    // loadイベント
    addEventListener('load', function(evt) {
      setTimeout(function() {
        self.evtCatcher(self, evt);
      }, 0);
    }, false);
  }
  if (tl.indexOf('click') >= 0) {
    // clickイベント
    bodyElm.addEventListener('click', function(evt) {
      setTimeout(function() {
        self.evtCatcher(self, evt);
      }, 0);
    }, false);
  }


  if (tl.indexOf('touchstart') >= 0) {
    // touchstartイベント
    bodyElm.addEventListener('touchstart', function(evt) {
      setTimeout(function() {
        self.evtCatcher(self, evt);
      }, 0);
    }, false);
  }
};
/**
 * mapのキー一覧を作成する.
 * @param {map配列} l
 * @param {キー} k
 * @return キー一覧
 * @since 0.0.2 (2019/03/07)
 */
FwLite.prototype.keyList = function(l, k) {
  var r = [];
  for (i of l) {
    if (r.indexOf(i[k]) < 0) r.push(i[k]);
  }
  return r;
};
/**
 * 指定の単一要素を検索する.
 * @param {このフレームワーク} self
 * @param {検索要素のキー名称} tgtNm
 * @return 要素オブジェクト
 * @since 0.0.1 (2019/02/16)
 */
FwLite.prototype.findElement = function(self, tgtNm) {
  return document.querySelector(tgtNm);
};
/**
 * 指定の要素を検索する.
 * @param {このフレームワーク} self
 * @param {検索要素のキー名称} tgtNm
 * @return 要素オブジェクト（一覧）
 * @since 0.0.1 (2019/02/21)
 */
FwLite.prototype.findElements = function(self, tgtNm) {
  return document.querySelectorAll(tgtNm);
};

/***************************************
 * jsonでajax通信を行う.
 * @param {このフレームワーク} self
 * @param {リクエスト} req
 * @since 2019/3/17
 */
FwLite.prototype.ajax = function(self, req) {
  // リクエストをスタックにプッシュ
  self._ajax.que.push(req);
  // リクエストを処理
  self.ajax_S100(self);
};
FwLite.prototype.ajax_S100 = function(self) {
  if (self._ajax.que.length == 0) {
    self._ajax.status = 'idle';
    console.log('no more ajax request');
    return;
  }
  setTimeout(function() {
    self._ajax.status = 'tx-101';
    self.ajax_S200(self);
  }, 0);
};
FwLite.prototype.ajax_S200 = function(self) {
  if (self._ajax.status === 'tx-101') {
    console.log('send request');
    var xhr = self._ajax_getXHR(self);
    xhr.send(JSON.stringify(self._ajax.que[0].req_data));
  } else {
    console.log('not supportted status : ' + self._ajax.status);
  }
};
/**
 * XMLHttpRequestを生成し、初期設定を行う.
 * @param {このフレームワーク} self
 * @since 2019/3/17
 */
FwLite.prototype._ajax_getXHR = function(self) {
  var req = self._ajax.que[0];
  var xhr = new XMLHttpRequest();
  xhr.open('POST', req.url, true);
  xhr.timeout = req.timeout;
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    self.ajax_onload(self, xhr);
  };
  xhr.onerror = function() {
    self.ajax_onerror(self, xhr);
  };
  xhr.onabort = function() {
    self.ajax_onabort(self, xhr);
  };
  xhr.ontimeout = function() {
    self.ajax_ontimeout(self, xhr);
  };
  return xhr;
};
/**
 * ajaxの処理結果を判定する.
 * @param {このフレームワーク} self
 * @param {終了状態文字列(OK/ERROR)} status
 * @param {XMLHttpRequestオブジェクト} xhr
 * @since 2019/3/17
 */
FwLite.prototype.ajax_S300 = function(self, status, xhr) {
  if (status === 'OK') {
    var req = self._ajax.que[0];
    setTimeout(function() {
      var data = xhr.responseText;
      req.success(JSON.parse(data));
    });
  } else {
    var req = self._ajax.que[0];
    setTimeout(function() {
      req.failure(status);
    });
  }
  self._ajax.que.pop();
  self._ajax.statis = 'idle';
  // キュー待ちのリクエストを処理
  self.ajax_S100(self);
};
/**
 * ajaxで応答を受信した時の処理を行う.
 * @param {このフレームワーク} self
 * @param {XMLHttpRequestオブジェクト} xhr
 * @since 2019/3/17
 */
FwLite.prototype.ajax_onload = function(self, xhr) {
  console.log('ajax_onload');
  if (xhr.status == 200) {
    self.ajax_S300(self, 'OK', xhr);
  } else {
    self.ajax_S300(self, xhr.statusText, xhr);
  }
};
/**
 * ajaxでエラーを検出した時の処理を行う.
 * @param {このフレームワーク} self
 * @param {XMLHttpRequestオブジェクト} xhr
 * @since 2019/3/17
 */
FwLite.prototype.ajax_onerror = function(self, xhr) {
  console.log('ajax_onerror');
  self.ajax_S300(self, 'ERROR', xhr);
};
/**
 * ajaxでabortを検出した時の処理を行う.
 * @param {このフレームワーク} self
 * @param {XMLHttpRequestオブジェクト} xhr
 * @since 2019/3/17
 */
FwLite.prototype.ajax_onabort = function(self, xhr) {
  console.log('ajax_onabort');
  self.ajax_S300(self, 'ERROR', xhr);
};
/**
 * ajaxでタイムアウトを検出した時の処理を行う.
 * @param {このフレームワーク} self
 * @param {XMLHttpRequestオブジェクト} xhr
 * @since 2019/3/17
 */
FwLite.prototype.ajax_ontimeout = function(self, xhr) {
  console.log('ajax_ontimeout');
  self.ajax_S300(self, 'TIMEOUT', xhr);
};

/***************************************
 * フレームワークLiteを起動
 */
var myFw = new FwLite(myApp);
myFw.prepare(myFw);

// end of framework