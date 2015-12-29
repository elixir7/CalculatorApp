var React=require('react');

var EvaluateButton=React.createClass({
	render:function(){
		return(
			<div className="col-sm-3">
				<button className="btn btn-success btn-raised" onClick={this.props.onClick}>=</button>
			</div>
		);
	}
});
module.exports=EvaluateButton;
