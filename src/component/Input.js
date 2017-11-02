import React, {Component} from 'react'
import {observer} from 'mobx-react'


@observer
class RightSection extends Component{

	constructor(props){
		super(props);

		this.state = {
			id: '',
			showText: ''
		}

	}


	submitTask = () => {
		var id = this.props.data.lists.length +1;
		var s = {
			id: id,
			title: this.state.showText
		};
		this.props.data.changeTitle(s);
		this.setState({id: '', showText: ''})
	}

	render(){
		return(

			<div className="col-12">
				<form>
				  <div className="form-row">

				    <div className="">
				      <input type="text" className=" col-7 form-control" placeholder="City" />
				      <button className="btn col-3">Submit</button>
				    </div>

				  </div>
				</form>
			</div>
		)
	}
}



export default RightSection;