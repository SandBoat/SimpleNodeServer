const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');  // 有多种适配器可选择
const shortid = require('shortid')

const adapter = new FileSync(path.join(__dirname, './db.json')); // 申明一个适配器
const db = low(adapter);

// 待办列表
const TODO_LIST_DATA_NAME = 'TODO_LIST';

db.defaults({ [TODO_LIST_DATA_NAME]: [] })
  .write();

console.log('db init........');

module.exports.getTodoList = function () {
  return db.get(TODO_LIST_DATA_NAME, [])
    .value();
}

module.exports.addTodo = function (todo = {}) {
  db.get(TODO_LIST_DATA_NAME, [])
    .push(todo)
    .write();
}

module.exports.batchAddData = function (todos = []) {
  todos.forEach(dto => this.addAccount(dto));
}

