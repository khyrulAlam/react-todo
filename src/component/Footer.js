import React, {Component} from 'react';

class Footer extends Component{

	constructor(props){
		super(props);
		this.state = {
			id: '',
			note: ''
		}

	}

	submitTask = (e) => {
		e.preventDefault();
		if(this.state.note === ''){ alert('Opss!!  I think you forget to insert your task'); return} 		
		var id = this.props.data.lists.length +1;
		var obj = {
			id: id,
			note: this.state.note
		};
			this.props.data.addNote(obj);
			this.setState({id: '', note: ''})
	}

	TaskTrack= (e)=>{
		this.setState({note:e.target.value})
	}

	render(){
		return(
			<section className="app__footer">
				<div className="container">
					<nav className="navbar fixed-bottom">  	
						
						<div className="col-10 ml-auto">
							<form className="form-inline" onSubmit={(e)=>{this.submitTask(e)}}>
								<input 
									type="text" 
									className="form-control col-8" 
									placeholder="Next Task"
									onChange={this.TaskTrack}
									value={this.state.note}
								/>
								<button className="btn">ADD</button>
							</form>
						</div>
					  	
					</nav>
				</div>
			</section>
		)
	}
}


export default Footer;