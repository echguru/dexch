EXPLORE = "https://scout.ech.network/address/";
tsca = "0x5C652A94c672f8F6D021417bB5eE75c322ecf1Fc";
function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener('load',async function()
{

	console.log("waitin for 3 secs..");
	$("cw_m").innerHTML = "Connecting.. Please wait."
	setTimeout(async () => { basetrip(); getao(INITIAL); }, 3000);
}, false);

async function basetrip()
{
//if(window.ethereum&&Number(window.ethereum.chainId)==250){web3 = new Web3(web3.currentProvider);if(!(window.ethereum.selectedAddress==null)){cw()}}

	if(!(window.ethereum)){$("cw_m").innerHTML = "Wallet wasn't detected!";console.log("Wallet wasn't detected!");provider = new ethers.providers.JsonRpcProvider(RPC_URL);
	//DrefreshFarm();
	pantvl();return}
	else if(!Number(window.ethereum.chainId)==CHAINID){$("cw_m").innerHTML = "Wrong network! Please Switch to "+CHAINID;provider = new ethers.providers.Web3Provider(window.ethereum);DrefreshFarm();pantvl();return}
	else if(//typeOf window.ethereum == Object &&Number(window.ethereum.chainId)
		Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Recognized Ethereum Chain:", window.ethereum.chainId,CHAINID);
		provider = new ethers.providers.Web3Provider(window.ethereum)
		signer = provider.getSigner();
		if(!(window.ethereum.selectedAddress==null)){console.log("Found old wallet:", window.ethereum.selectedAddress);cw();}
	}
	else //if(Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Couldn't find Ethereum Provider - ",CHAINID,window.ethereum.chainId)
		if((typeof Number(window.ethereum.chainId) == "number")){$("cw_m").innerHTML = "Wrong network! Switch from " + Number(window.ethereum.chainId)+" to "+CHAINID}
		provider = new ethers.providers.JsonRpcProvider(RPC_URL);
		signer = provider.getSigner()
		$("connect").innerHTML=`Wallet not found.<br><br><button onclick="window.location.reload()" id="btn-connect">Retry?</button>`;
	}
	//DrefreshFarm()
	pantvl()
	//arf()
	//getao(100e18)
}
async function pantvl()
{
	tabi = [{"constant": true,"inputs": [],"name": "tvl","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]
	const tg = new ethers.Contract(tsca,tabi,provider)
	let r = await tg.tvl()
	$("pantvl").innerHTML = "$"+(Number(r._hex)/1e18).toLocaleString()
}/*
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Qt."}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Qd."}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Tn."}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Bn."}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Mn."}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Th."}
	else if(_n>0){n_=(_n/1e0).toFixed(5)+""}
	return(n_);
}
*/
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(3)+"Qt"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(3)+"Qd"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(3)+"T"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(3)+"B"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(3)+"M"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(3)+"K"}
	else if(_n>1e1){n_=(_n/1e0).toFixed(5)+""}
	else if(_n>0.0){n_=(_n/1e0).toFixed(8)+""}
	return(n_);
}
ab1=
[
	{
	"constant": true,
	"inputs": [
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		},
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	],
	"name": "allowance",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [
		{
		"internalType": "address",
		"name": "spender",
		"type": "address"
		},
		{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
		}
	],
	"name": "approve",
	"outputs": [
		{
		"internalType": "bool",
		"name": "",
		"type": "bool"
		}
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "guy",
				"type": "address"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
	"constant": true,
	"inputs": [
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	],
	"name": "balanceOf",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "decimals",
	"outputs": [
		{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "factory",
	"outputs": [
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "getReserves",
	"outputs": [
		{
		"internalType": "uint112",
		"name": "_reserve0",
		"type": "uint112"
		},
		{
		"internalType": "uint112",
		"name": "_reserve1",
		"type": "uint112"
		},
		{
		"internalType": "uint32",
		"name": "_blockTimestampLast",
		"type": "uint32"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [
		{
		"internalType": "address",
		"name": "_token0",
		"type": "address"
		},
		{
		"internalType": "address",
		"name": "_token1",
		"type": "address"
		}
	],
	"name": "initialize",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "symbol",
	"outputs": [
		{
		"internalType": "string",
		"name": "",
		"type": "string"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "name",
	"outputs": [
		{
		"internalType": "string",
		"name": "",
		"type": "string"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
async function cw()
{
	let cs = await cw2(); cs?console.log("Good to Transact"):cw2()
}
async function cw2()
{
	if(!(window.ethereum)){$("cw_m").innerHTML="Metamask not detected! Trying a refresh";console.log("Metamask not found!");window.location.reload();return(0)}
	if(!(Number(window.ethereum.chainId)==CHAINID)){$("cw_m").innerHTML="Wrong network detected! Please switch to chain ID", CHAINID, "and refresh this page.";return(0)}
	if(typeof provider == "undefined"){$("cw_m").innerHTML="Provider not detected! Trying a refresh";console.log("Provider not found!");window.location.reload();return(0)}
	/*
	if(!
		(isFinite(Number(accounts[0])))
		|| (isFinite(Number(window.ethereum.selectedAddress)))
	){console.log("NAAAAAAAAAAAAAAAAA");window.location.reload();}
	*/

	//004
	window.ethereum
	.request({ method: 'eth_requestAccounts' })
	.then(r=>{console.log("004: Success:",r);})	//re-curse to end curse, maybe..
	.catch((error) => {	console.error("004 - Failure", r, error); });


	//005
	const accounts = await window.ethereum.request({ method: 'eth_accounts' });
	if(Number(accounts[0])>0){console.log("005: Success - ", accounts)}
	else{console.log("005: Failure", accounts)}


	/*006
	const en6 = await window.ethereum.enable()
	if(Number(en6[0]) > 0){console.log("006 - Success",en6)}
	else{console.log("006 - Failure", en6)}
	*/


	/*003
	try {
      console.log("attempting cw()")
      const addresses = await provider.request({ method: "eth_requestAccounts" });
      console.log("addresses:",addresses)
    } catch (e) {
      console.log("error in request", e);
      window.location.reload(true);
    }
    */

    //002
    //try{await provider.send("eth_requestAccounts", []);console.log("CWE:",e);}//await window.ethereum.enable();
	//catch(e){console.log("CWE:",e);window.location.reload(true)}
	console.log("doing the paints")
	$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);
	$("cw_m").innerHTML=""
	$("connect").style.display="none";
	$("switch").style.display="block";
	farm_1_f_chappro()
	gubs();
	return(1);
}
function fornum2(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Quintillion"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Quadrillion"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Trillion"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Billion"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Million"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Thousand"}
	else if(_n>1){n_=(_n/1e0).toFixed(8)+""}
	return(n_);
}
function arf(){
	lastin = INITIAL
	var xfr = setInterval(
		function(){
			if(lastin == $('ain').value && isFinite($('ain').value) ) {	return }
			else { lastin = $('ain').value; getao(lastin) }
		},
		3000
	)
}

abbrove=[
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}];

abit=
[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_w","internalType":"address"},{"type":"address","name":"_m","internalType":"address"},{"type":"address","name":"_e","internalType":"address"},{"type":"address","name":"_r","internalType":"address"},{"type":"address[]","name":"_ra","internalType":"address[]"},{"type":"string","name":"_id","internalType":"string"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"address","name":"guy","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"src","internalType":"address","indexed":true},{"type":"address","name":"dst","internalType":"address","indexed":true},{"type":"uint256","name":"wad","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"ELITE","internalType":"address"},{"type":"uint256","name":"ELITES","internalType":"uint256"}],"name":"Eliteness","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allnums","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"guy","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"guy","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"apyr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"aum","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"config","inputs":[{"type":"uint256","name":"_mw","internalType":"uint256"},{"type":"uint256","name":"_wi","internalType":"uint256"},{"type":"uint256","name":"_pf","internalType":"uint256"},{"type":"address","name":"_t","internalType":"address"},{"type":"uint256","name":"_df","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"dao","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"declareEmergency","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_amt","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"doHardWork","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"earn","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"eliteness","inputs":[{"type":"address","name":"u","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"emergency","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_amt","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"id","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"tuple","name":"","internalType":"struct IMasterchef.UserInfo","components":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}]},{"type":"tuple","name":"","internalType":"struct IMasterchef.PoolInfo","components":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accTokenPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"}]},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"info","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IMasterchef"}],"name":"mc","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pullElite","inputs":[{"type":"uint256","name":"n","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pushElite","inputs":[{"type":"address","name":"elite","internalType":"address"},{"type":"uint256","name":"elites","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"success","internalType":"bool"}],"name":"rescue","inputs":[{"type":"address","name":"tokenAddress","internalType":"address"},{"type":"uint256","name":"tokens","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"revokeEmergency","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"routeA","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"router","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"salvage","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"src","internalType":"address"},{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"treasury","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tvl","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"utvl","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"want","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_amt","internalType":"uint256"}]}]

async function farm_1_f_approve()
{
	try
	{
		theCon = new ethers.Contract(pairadd, abbrove, signer);
		txr = await theCon.approve(f_1_add,"999999999999999999999999999999999999",{gasLimit: 100000});
		console.log("Granting approval: txhash=",rectx);
		await txr.wait();
		console.log("Approval Granted: txhash=",rectx)
		gs()
		farm_1_f_chappro()
		//.send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}






DAO = "0x167D87A906dA361A10061fe42bbe89451c2EE584"
DE = "0xD829F441F2Ee6038a78dc01B0B0797b0630BBe49"

pairs = [
	[0,	0,	0,	"0x9ec918e3a7312032147bfc0dc68c07f4984b55c5", 	"EchSwap",	 	"USDC",		18,	"WECH",		18,	0.0,	0.0],
	[0,	0,	0,	"0xece49b38d9fe03756dc348ba7844d13be77c0909", 	"DefySwap",	 	"USDC",		18,	"WECH",		18,	0.0,	0.0],
]
tokes = [
	["0xadee5159f4f82a35b9068a6c810bdc6c599ba6a8",	"WECH",			18],
	["0xc42974d6554F9054265b477723C3f689d8699239",	"USDC",			18],
	["0x4df9da1037108ed96c71fa77b85395cc21a86d60",	"ECS",			18],
	["0xe8295999b43e79071e23e4c108959297a7643859",	"DFY",			18],
]
rutrs = [
	["0x35fb4895b68aC7A2D11da59d4E9f520c9C86A546",	"EchSwap"],
	["?",	"EliteSwap"],
	["0x35e11136FA9a734AF6B81658D66519854fB6793c",	"DefySwap"],
]
facts = [
	["0xafd37a86044528010d0e70cdc58d0a9b5eb03206",	"EchSwap"],
	["?",	"EliteSwap"],
	["0xdbe4cc36d0c19858d8cc7c5030593e9922ac680d",	"DefySwap"],
]

rabi = [{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"}]

pa = [{"constant": true,"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "address","name": "","type": "address"}],"name": "allowance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "value","type": "uint256"}],"name": "approve","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "guy","type": "address"}],"name": "approve","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"internalType": "uint8","name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "factory","outputs": [{"internalType": "address","name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getReserves","outputs": [{"internalType": "uint112","name": "_reserve0","type": "uint112"},{"internalType": "uint112","name": "_reserve1","type": "uint112"},{"internalType": "uint32","name": "_blockTimestampLast","type": "uint32"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "_token0","type": "address"},{"internalType": "address","name": "_token1","type": "address"}],"name": "initialize","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}];



async function gao(ain,r,pat)
{
	R = new ethers.Contract(rutrs[r][0],rabi,provider);
	let outs = await R.getAmountsOut(ain,pat);
	out=Number(outs[outs.length-1])
	console.log(out);
	return out;
}

async function getao(ain)
{
	ain = Number(ain)
	$("ainp").innerHTML = ain.toFixed(5)
	$("ao_0").innerHTML = "???"
	$("ao_1").innerHTML = "???"
	$("ao_2").innerHTML = "???"
	pat=[ tokes[1][0], tokes[0][0] ]
	ain = String(Number(ain).toFixed(18)).split(".").join("")
	//de = gao(ain,0,pat)
	x = new ethers.Contract(DE,abix,provider)
	de = x.quote(ain,pat[0],pat[1])
	es = gao(ain,0,pat)
	ds = gao(ain,2,pat)
	Promise.all([de,es,ds]).then(pr=>{
		$("ao_0").innerHTML = (Number(pr[0])/1e18).toFixed(5)
		$("ao_1").innerHTML = (Number(pr[1])/1e18).toFixed(5)
		$("ao_2").innerHTML = (Number(pr[2])/1e18).toFixed(5)
	})
}


abix =
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "into",
				"type": "address"
			}
		],
		"name": "quote",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "rescue",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "t0",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "t1",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "t",
				"type": "address[]"
			}
		],
		"name": "setAPP",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "f",
				"type": "uint256"
			}
		],
		"name": "setFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "r",
				"type": "address"
			}
		],
		"name": "setRF",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "min",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "into",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					}
				],
				"internalType": "struct Dexchelon.fit",
				"name": "f",
				"type": "tuple"
			}
		],
		"name": "swap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



APPR = [false, false, false]
B=[]
RUTR = [
	"0xD829F441F2Ee6038a78dc01B0B0797b0630BBe49",
	"0x35fb4895b68aC7A2D11da59d4E9f520c9C86A546",
	"0x35e11136FA9a734AF6B81658D66519854fB6793c"
]

DEC = {
	"0xadee5159f4f82a35b9068a6c810bdc6c599ba6a8": 18,	//WECH
	"0xc42974d6554F9054265b477723C3f689d8699239": 18	//USDC
}



async function appr(_r,_t){
	T = new ethers.Contract(_t,abit,provider);
	let _tr = await T.approve(_r,ethers.constants.MaxUint256);
	alert("appr=>"+_r+_t)
	await _tr.wait()
	alert("appr.completed")
}

async function chkAppr(_t){
	T = new ethers.Contract(_t,abit,provider);
	a=[]
	for(i=0;i< RUTR.length; i++) { a[i] = T.allowance(window.ethereum.selectedAddress, RUTR[i]) }
	a[i] = T.balanceOf(window.ethereum.selectedAddress)
	await Promise.all(a).then(ap=>{for(i=0;i< RUTR.length; i++) { APPR[i] = Number(ap[i]) } ;B=ap[i]})
	for(i=0;i< RUTR.length; i++){
		if(APPR[i]>B){
			$("appr-btn-"+i).disabled=false;
			$("sell-btn-"+i).style.display=true;
			$("appr-btn-"+i).style.display="none";
			$("sell-btn-"+i).style.display="";
		}
		else{
			$("appr-btn-"+i).disabled=true;
			$("sell-btn-"+i).style.display=false;
			$("appr-btn-"+i).style.display="";
			$("sell-btn-"+i).style.display="none";
		}
	}
}

async function sw(_r,_a,_f,_t,_m){
	if(!isFinite(_a)){alert('malformed input amount!');return}
	_a = (_a*10**DEC[_f])
	_m = (_m*10**DEC[_t])
	if(B<_a){alert("Not Enough Balance!\nhave="+B/10**DEC[_f])+"\nwant="+_a;return}
	R = new ethers.Contract(_r,abir,signer);
	let _tr = await R.swapExactTokensForTokensSupportingFeeOnTransferTokens(
		BigInt(_a),
		BigInt(_m),
		[_f,_t],
		window.ethereum.selectedAddress,
		(Date.now()/1e3 + $("deadline").value*3600).toFixed()
	)
	alert("sw=>"+_r+_a+_f+_t+_m)
	await _tr.wait()
	alert("sw.completed")
}

async function de(a,m,f,i,t){
	if(!isFinite(_a)){alert('malformed input amount!');return}
	_a = (_a*10**DEC[_f])
	_m = (_m*10**DEC[_t])
	if(B<_a*10**DEC[_f]){alert("Not Enough Balance!\nhave="+B/10**DEC[_f])+"\nwant="+_a;return}
	D = new ethers.Contract(RUTR[0],abix,signer)
	let _tr = await D.swap(BigInt(a),BigInt(m),{from:f,into:i,to:t})
	alert("de=>"+a+m+f+i+t)
	await _tr.wait()
	alert("de.completed")
}