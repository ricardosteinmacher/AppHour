'use strict';

angular.module('AppHour')

.factory('web_services', function($http, $rootScope, HTTP_SERVER_HOST){
	return {
		carrega_bar: function(bar_id) {
			return $http.post(HTTP_SERVER_HOST,{action: 'carrega_bar', bar_cod: bar_id}).then(function(data){
                console.log(data.data.bar.bar_nome);
                //.bar_cod, .bar_nome, .bar_sobre, .bar_horarios, .bar_telefone1, .bar_telefone2, .bar_valorentrada, .bar_programacao, .bar_facebook, .bar_site, .bar_latitude, .bar_longitude, .bar_pagante, 

				return data.data;
			});
        },
    lista_destaques: function() {
			return $http.post(HTTP_SERVER_HOST,{action: 'lista_destaques'}).then(function(data){
//                console.log(data.data);

				return data.data;
			});
        },
    lista_bares: function(latitude, longitude) {
                var lat = latitude.toString();
                var long = longitude.toString();
            console.log("------ lista_bares Lat:" + lat +" Long:" + long + " ------");
			return $http.post(HTTP_SERVER_HOST,
                    {
                        action: 'lista_bares', 
                        usu_latitude: lat, 
                        usu_longitude: long
                    })
                .then(function(data) {
                if (data.data.status == '1') {
                    $rootScope.bares = data.data.bares;
                    var bares = data.data.bares;
                    for(var cat in bares)
                    {
                        console.log(bares[cat].est_nome +":");
                        var j=0;
                        for (var est_bares in bares[cat].est_bares) 
                        {
                            var bar = bares[cat].est_bares[j];
                            console.log("  - " + bar.bar_nome + " / ID: " + bar.bar_cod + " / " + bar.bar_distancia);
                            j++;
                        }
                    }
                    console.log("----------------------FIM lista_bares-------------------");
                }
                else {
                    console.log("Ocorreu um erro: " + data.data);
                }
				return data.data;
			});
        },
    lista_categorias_cardapio: function(bar_id) {
			return $http.post(HTTP_SERVER_HOST,{action: 'lista_categorias_cardapio', bar_cod: bar_id}).then(function(data){
//                console.log(data.data);

				return data.data;
			});
        },
    lista_itens_cardapio: function(card_id) {
			return $http.post(HTTP_SERVER_HOST,{action: 'lista_itens_cardapio', cardcat_cod: card_id}).then(function(data){
//                console.log(data.data);

				return data.data;
			});
        },
    lista_promocoes: function(bar_id) {
			return $http.post(HTTP_SERVER_HOST,{action: 'lista_promocoes', bar_cod: bar_id}).then(function(data){
//                console.log(data.data);

				return data.data;
			});
        },
    valida_usuario: function() {
			return $http.post(HTTP_SERVER_HOST,{action: 'valida_usuario'}).then(function(data){
//                console.log(data.data);

				return data.data;
			});
        },
    registra_usuario: function() {
			return $http.post(HTTP_SERVER_HOST,{action: 'registra_usuario'}).then(function(data){
//                console.log(data.data);

				return data.data;
			});
        },
    registra_navegacao: function(type) {
			return $http.post(HTTP_SERVER_HOST,{action: 'registra_navegacao', tipo: type}).then(function(data){
//                console.log(data.data);

				return data.data;
			});
        }
    }
})

.factory('DB_local', function($cordovaSQLite, $rootScope) {
    
//    db = $cordovaSQLite.openDB("my.db");

return {
//    saveHome: function() {
//        var bares_unq = [];
//        $cordovaSQLite.execute(db, "DELETE FROM estilo")
//            .then(function(res) {
//                 $cordovaSQLite.execute(db, "DELETE FROM bar")
//                     .then(function(res) {
//                     console.log("Tabelas Limpas!");
//                     
//                     //Monta vetor sem repetição dos bares e grava as categorias no DB
//                      
//                      bares_unq[0] = $rootScope.bares[1].est_bares[0];
//                      var k=1;
//                      
//                      //Varre todas as categorias recebidas
//                      for(var cat in $rootScope.bares) {
//                              
//                              var j=0;
//                              //Varre todos os bares dentro da categoria
//                              for (var est_bares in $rootScope.bares[cat].est_bares) 
//                              {
//                                  var bar = $rootScope.bares[cat].est_bares[j];
//                                  
//                                  var query = "INSERT INTO estilo (bar_cod, est_cod, est_nome) VALUES (?,?,?)";
//                                  
//                                  $cordovaSQLite.execute(db, query, [bar.bar_cod, $rootScope.bares[cat].est_cod, $rootScope.bares[cat].est_nome]).then(function(res) {
//                                      console.log("INSERT ESTILO ID -> " + res.insertId);
//                                  }, function (err) {
//                                      console.error(err);
//                                  });
//
//                                  var dif = true;
//                                  for(var i=0;i<bares_unq.length;i++) {
//                                      if(bar.bar_cod == bares_unq[i].bar_cod) { 
//                                          dif = false;
//                                          break;
//                                      }
//                                  }
//                                  if(dif) {
//                                      bares_unq[k] = bar;
//                                      k++;
//                                  }
//                                  j++;
//                              }                 
//                      }
//                      for(var i=0;i<bares_unq.length;i++) { 
//                          
//                          var bar = bares_unq[i];
//                          var query = "INSERT INTO bar (bar_cod, bar_nome, bar_sobre, bar_horarios, bar_telefone1, bar_telefone2, bar_valorentrada, bar_programacao, bar_facebook, bar_site, bar_latitude, bar_longitude, bar_pagante) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
//                            
//                            $cordovaSQLite.execute(db, query, [bar.bar_cod, bar.bar_nome, bar.bar_sobre, bar.bar_horarios, bar.bar_telefone1, bar.bar_telefone2, bar.bar_valorentrada, bar.bar_programacao, bar.bar_facebook, bar.bar_site, bar.bar_latitude, bar.bar_longitude, bar.bar_pagante]).then(function(res) {
//                                                    console.log("INSERT BAR ID -> " + res.insertId);
//                                                }, function (err) {
//                                                    console.log(err);
//                                                    console.error("ERRO Salvar Bares: "+ err);
//                                                }); 
//                      } 
//                 },
//                           function(err){ 
//                     console.log("Erro ao apagar a tabela Bar");
//                 })
//            },
//            function(err) { 
//                console.log("Erro ao apagar a tabela Destaque");
//            })
    },
//    getDestaques: function() {
//        var query = "SELECT bar.bar_nome, estilo.est_nome FROM bar INNER JOIN estilo ON estilo.bar_cod = bar.bar_cod AND estilo.est_cod = 0";
//            $cordovaSQLite.execute(db, query).then(function(res) {
//                
//                for(var i=0; i<res.rows.length;i++) {
//                    var destaques = res.rows;
//                    console.log(destaques.item(i).bar_nome + " " + destaques.item(i).est_nome);
//                }
//                
//            }, function (err) {
//                console.error(err);
//            })
//            
//    },
    getBares: function(lat, long) {
        //Pega todos os estilos gravados no banco SEM REPETIÇÕES
//        var query = "SELECT DISTINCT est_cod, est_nome FROM estilo";
//            $cordovaSQLite.execute(db, query).then(function(res) {
//                
//                $rootScope.bares = [];
//                $rootScope.bares[0] = {est_cod: "", est_nome:"", est_bares:[]};
//
//                var estilos = res.rows;
//
//                //Busca os bares de cada estilo
//                for(var i=0; i<estilos.length;i++) {
//
//                    var est_cod1 = estilos.item(i).est_cod;
//                    var k=0;
//                    
//                    var query = "SELECT bar.*, estilo.est_cod, estilo.est_nome FROM bar INNER JOIN estilo ON estilo.bar_cod = bar.bar_cod AND estilo.est_cod = ?";
//                    $cordovaSQLite.execute(db, query,[est_cod1]).then(function(res) {
//                        var bares = null;
//                        bares = [];
//                        
//                        for(var j=0;j<res.rows.length;j++) {
//                            
//                            //Calcula distância atual do bar
//                            var R = 6371; // Radius of the earth in km
//                            var dLat = (res.rows.item(j).bar_latitude-lat)*(Math.PI/180);  // deg2rad below
//                            var dLon = (res.rows.item(j).bar_longitude-long)*(Math.PI/180); 
//                            var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat*(Math.PI/180)) * Math.cos((res.rows.item(j).bar_latitude)*(Math.PI/180)) * Math.sin(dLon/2) * Math.sin(dLon/2);
//                            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//                            var d = R * c; // Distance in km
//                            
//                            bares[j]=res.rows.item(j);
//                            bares[j]['bar_distancia']=d;
//
//                        }
//                        console.log("Total de bares em:" + res.rows.item(0).est_nome + " " + bares.length);
//                        
//                        $rootScope.bares[k] = {est_cod: res.rows.item(0).est_cod, est_nome:res.rows.item(0).est_nome, est_bares:bares};
//                        k++;
//
//                    }, function (err) {
//                        console.error(err);
//                    })
//                }
//            }, function (err) {
//                console.error(err);
//            })
    },
    teste: function() {
//        var bares = $rootScope.bares;
//        for(var cat in bares)
//        {
//            console.log(bares[cat].est_nome +":");
//            var j=0;
//            for (var est_bares in bares[cat].est_bares) 
//            {
//                var bar = bares[cat].est_bares[j];
//                console.log("  - " + bar.bar_nome + " / ID: " + bar.bar_cod + " / " + bar.bar_distancia);
//                j++;
//            }
//        }
    }
};
});