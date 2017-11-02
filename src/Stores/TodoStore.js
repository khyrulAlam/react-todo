import {observable, action} from 'mobx'



class TodoStore{

	@observable lists = []

	@action addNote = (obj) => {
        this.lists.push(obj);
    }

    @action removeList(id){
    	this.lists.splice(id,1);
    }


}


export default new TodoStore();
