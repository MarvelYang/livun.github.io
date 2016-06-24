var THEONE = {};
var existArr = [];
var cardsCost = [
{
		id:1,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:2,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:3,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:4,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:5,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:6,
		name:'牧师',
		cost:2,
		lock: false,
		power:'priest'
	},
	{
		id:7,
		name:'牧师',
		cost:2,
		lock: false,
		power:'priest'
	},
	{
		id:8,
		name:'男爵',
		cost:3,
		lock: false,
		power:'baron'
	},
	{
		id:9,
		name:'男爵',
		cost:3,
		lock: false,
		power:'baron'
	},
	{
		id:10,
		name:'女仆',
		cost:4,
		lock: false,
		power:'handmaid'
	},
	{
		id:11,
		name:'女仆',
		cost:4,
		lock: false,
		power:'handmaid'
	},
	{
		id:12,
		name:'王子',
		cost:5,
		lock: false,
		power:'prince'
	},
	{
		id:13,
		name:'王子',
		cost:5,
		lock: false,
		power:'prince'
	},
	{
		id:14,
		name:'国王',
		cost:6,
		lock: false,
		power:'king'
	},
	{
		id:15,
		name:'女伯爵',
		cost:7,
		lock: false,
		power:'countess'
	},
	{
		id:16,
		name:'公主',
		cost:8,
		lock: false,
		power:'princess'
	}
];
var cardsArr = [
	{
		id:1,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:2,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:3,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:4,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:5,
		name:'守卫',
		cost:1,
		lock: false,
		power:'guard'
	},
	{
		id:6,
		name:'牧师',
		cost:2,
		lock: false,
		power:'priest'
	},
	{
		id:7,
		name:'牧师',
		cost:2,
		lock: false,
		power:'priest'
	},
	{
		id:8,
		name:'男爵',
		cost:3,
		lock: false,
		power:'baron'
	},
	{
		id:9,
		name:'男爵',
		cost:3,
		lock: false,
		power:'baron'
	},
	{
		id:10,
		name:'女仆',
		cost:4,
		lock: false,
		power:'handmaid'
	},
	{
		id:11,
		name:'女仆',
		cost:4,
		lock: false,
		power:'handmaid'
	},
	{
		id:12,
		name:'王子',
		cost:5,
		lock: false,
		power:'prince'
	},
	{
		id:13,
		name:'王子',
		cost:5,
		lock: false,
		power:'prince'
	},
	{
		id:14,
		name:'国王',
		cost:6,
		lock: false,
		power:'king'
	},
	{
		id:15,
		name:'女伯爵',
		cost:7,
		lock: false,
		power:'countess'
	},
	{
		id:16,
		name:'公主',
		cost:8,
		lock: false,
		power:'princess'
	}
];

var playersArr = [
	{
		id: "1",
		exist: true,
		choose: true
	},
	{
		id: "2",
		exist: true,
		choose: true
	},
	{
		id: "3",
		exist: true,
		choose: true
	},
	{
		id: "4",
		exist: true,
		choose: true
	}
];
