new Vue({
	el: '.container',
	data: {
		lists: [],
		newKeep: ''
	},
	methods: {
		delKeep: function(index){
			this.lists.splice(index, 1);
		},
		addKeep: function(){
			this.lists.push({keep: this.newKeep, completed: false});
			this.newKeep = '';
		}
	}
});


//inhabilitar menu
function inhabilitar(){
	return false;
}
document.oncontextmenu=inhabilitar