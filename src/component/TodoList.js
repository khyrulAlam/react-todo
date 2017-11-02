import React, {Component} from 'react'
import { } from 'reactstrap';
import {observer} from 'mobx-react'

@observer
class TodoList extends Component{

	constructor(props){
		super(props);
		this.state = {
			notes: this.props.data.lists
		}
	}

	deleteNote = (id)=>{
		this.props.data.removeList(id);
	}

	render(){

		return(
			<section className="todo__container">
				<div className="container">
					<div className="row justify-content-center">

						<div className="col-6">

							{this.state.notes.map(

								(note,i)=> 
								<div className="todo__lists" key={i}>
									<h3>{note.note}</h3>
									<span className="delete__img">
										<a onClick={ (id)=>{this.deleteNote(i)} }>
											<img src="trash-can.svg" alt="delete"/>
										</a>
									</span>
								</div>

							)}


						</div>	
					</div>
				</div>
			</section>
		)
	}
}


export default TodoList;