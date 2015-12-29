var React=require('react');

var ClearButton=React.createClass({
	render:function(){
		return(
			<div className="col-sm-3">
				<button className="btn btn-danger btn-raised" onClick={this.props.onClick}>C</button>
			</div>
		);
	}
});
module.exports=ClearButton;
