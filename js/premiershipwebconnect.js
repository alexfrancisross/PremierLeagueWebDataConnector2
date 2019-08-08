(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();
	var myProxy = 'http://files.tableaujunkie.com/proxy/proxy.php?u='

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var playercols = [{
            id: 'player_id',
            alias: 'player_id',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'photo',
            alias: 'photo',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'web_name',
            alias: 'web_name',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'status',
            alias: 'status',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'playercode',
            alias: 'playercode',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'first_name',
            alias: 'first_name',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'second_name',
            alias: 'second_name',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'squad_number',
            alias: 'squad_number',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'news',
            alias: 'news',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'now_cost',
            alias: 'now_cost',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'chance_of_playing_this_round',
            alias: 'chance_of_playing_this_round',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'chance_of_playing_next_round',
            alias: 'chance_of_playing_next_round',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'value_form',
            alias: 'value_form',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'value_season',
            alias: 'value_season',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'cost_change_start',
            alias: 'cost_change_start',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'cost_change_start_fall',
            alias: 'cost_change_start_fall',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'cost_change_event_fall',
            alias: 'cost_change_event_fall',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'in_dreamteam',
            alias: 'in_dreamteam',
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: 'dreamteam_count',
            alias: 'dreamteam_count',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'selected_by_percent',
            alias: 'selected_by_percent',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'form',
            alias: 'form',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'transfers_out',
            alias: 'transfers_out',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'transfers_in',
            alias: 'transfers_in',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'transfers_out_event',
            alias: 'transfers_out_event',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'transfers_in_event',
            alias: 'transfers_in_event',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'loans_in',
            alias: 'loans_in',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'loans_out',
            alias: 'loans_out',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'loaned_in',
            alias: 'loaned_in',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'total_points',
            alias: 'total_points',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'event_points',
            alias: 'event_points',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'points_per_game',
            alias: 'points_per_game',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'ep_this',
            alias: 'ep_this',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'ep_next',
            alias: 'ep_next',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'special',
            alias: 'special',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'minutes',
            alias: 'minutes',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'goals_scored',
            alias: 'goals_scored',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'assists',
            alias: 'assists',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'clean_sheets',
            alias: 'clean_sheets',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'goals_conceded',
            alias: 'goals_conceded',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'own_goals',
            alias: 'own_goals',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'penalties_saved',
            alias: 'penalties_saved',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'penalties_missed',
            alias: 'penalties_missed',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'yellow_cards',
            alias: 'yellow_cards',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'red_cards',
            alias: 'red_cards',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'saves',
            alias: 'saves',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'bonus',
            alias: 'bonus',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'bps',
            alias: 'bps',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'influence',
            alias: 'influence',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'creativity',
            alias: 'creativity',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'threat',
            alias: 'threat',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'ict_index',
            alias: 'ict_index',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'ea_index',
            alias: 'ea_index',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'element_type',
            alias: 'element_type',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'team_id',
            alias: 'team_id',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'position',
            alias: 'position',
            dataType: tableau.dataTypeEnum.string,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'full_name',
            alias: 'full_name',
            dataType: tableau.dataTypeEnum.string
        }];

        var teamcols = [{
            id: 'team_id',
            alias: 'team_id',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'name',
            alias: 'name',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'teamcode',
            alias: 'teamcode',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'short_name',
            alias: 'short_name',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'unavailable',
            alias: 'unavailable',
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: 'strength',
            alias: 'strength',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'position',
            alias: 'position',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'played',
            alias: 'played',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'win',
            alias: 'win',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'loss',
            alias: 'loss',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'draw',
            alias: 'draw',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'points',
            alias: 'points',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'form',
            alias: 'form',
            dataType: tableau.dataTypeEnum.string,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'strength_overall_home',
            alias: 'strength_overall_home',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'strength_overall_away',
            alias: 'strength_overall_away',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'strength_attack_home',
            alias: 'strength_attack_home',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'strength_attack_away',
            alias: 'strength_attack_away',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'strength_defence_home',
            alias: 'strength_defence_home',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'strength_defence_away',
            alias: 'strength_defence_away',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'team_division',
            alias: 'team_division',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }];

        var fixturecols = [{
            id: 'fixture_id',
            alias: 'fixture_id',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'started',
            alias: 'started',
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: 'fixture_code',
            alias: 'fixture_code',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'kickoff_time',
            alias: 'kickoff_time',
            dataType: tableau.dataTypeEnum.datetime
        }, {
            id: 'team_h_score',
            alias: 'team_h_score',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'team_a_score',
            alias: 'team_a_score',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'finished',
            alias: 'finished',
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: 'minutes',
            alias: 'minutes',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'provisional_start_time',
            alias: 'provisional_start_time',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'finished_provisional',
            alias: 'finished_provisional',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'event',
            alias: 'event',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'team_a',
            alias: 'team_a',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'team_h',
            alias: 'team_h',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'team_a_difficulty',
            alias: 'team_a_difficulty',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'team_h_difficulty',
            alias: 'team_h_difficulty',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }];

        var historyPastcols = [{
            id: 'season_name',
            alias: 'season_name',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: 'element_code',
            alias: 'element_code',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'start_cost',
            alias: 'start_cost',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'end_cost',
            alias: 'end_cost',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'total_points',
            alias: 'total_points',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'minutes',
            alias: 'minutes',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'goals_scored',
            alias: 'goals_scored',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'assists',
            alias: 'assists',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'clean_sheets',
            alias: 'clean_sheets',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'goals_conceded',
            alias: 'goals_conceded',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'own_goals',
            alias: 'own_goals',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'penalties_saved',
            alias: 'penalties_saved',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'penalties_missed',
            alias: 'penalties_missed',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'yellow_cards',
            alias: 'yellow_cards',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'red_cards',
            alias: 'red_cards',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'saves',
            alias: 'saves',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'bonus',
            alias: 'bonus',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'bps',
            alias: 'bps',
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'influence',
            alias: 'influence',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'creativity',
            alias: 'creativity',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'threat',
            alias: 'threat',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'ict_index',
            alias: 'ict_index',
            dataType: tableau.dataTypeEnum.float
        }, {
            id: 'player_id',
            alias: 'player_id',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }]
		
		var historycols = [{
            id: 'id',
            alias: 'id',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }, {
            id: 'kickoff_time',
            alias: 'kickoff_time',
            dataType: tableau.dataTypeEnum.datetime
        },{
            id: 'kickoff_time_formatted',
            alias: 'kickoff_time_formatted',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'team_h_score',
            alias: 'team_h_score',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'team_a_score',
            alias: 'team_a_score',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'was_home',
            alias: 'was_home',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'round',
            alias: 'round',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'total_points',
            alias: 'total_points',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'value',
            alias: 'value',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'transfers_balance',
            alias: 'transfers_balance',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'selected',
            alias: 'selected',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'transfers_in',
            alias: 'transfers_in',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'transfers_out',
            alias: 'transfers_out',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'loaned_in',
            alias: 'loaned_in',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'loaned_out',
            alias: 'loaned_out',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'minutes',
            alias: 'minutes',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'goals_scored',
            alias: 'goals_scored',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'assists',
            alias: 'assists',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'clean_sheets',
            alias: 'clean_sheets',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'goals_conceded',
            alias: 'goals_conceded',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'own_goals',
            alias: 'own_goals',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'penalties_saved',
            alias: 'penalties_saved',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'penalties_missed',
            alias: 'penalties_missed',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'yellow_cards',
            alias: 'yellow_cards',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'red_cards',
            alias: 'red_cards',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'saves',
            alias: 'saves',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'bonus',
            alias: 'bonus',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'bps',
            alias: 'bps',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'influence',
            alias: 'influence',
            dataType: tableau.dataTypeEnum.float
        },{
            id: 'creativity',
            alias: 'creativity',
            dataType: tableau.dataTypeEnum.float
        },{
            id: 'threat',
            alias: 'threat',
            dataType: tableau.dataTypeEnum.float
        },{
            id: 'ict_index',
            alias: 'ict_index',
            dataType: tableau.dataTypeEnum.float
        },{
            id: 'ea_index',
            alias: 'ea_index',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'open_play_crosses',
            alias: 'open_play_crosses',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'big_chances_created',
            alias: 'big_chances_created',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'clearances_blocks_interceptions',
            alias: 'clearances_blocks_interceptions',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'recoveries',
            alias: 'recoveries',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'key_passes',
            alias: 'key_passes',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'tackles',
            alias: 'tackles',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'winning_goals',
            alias: 'winning_goals',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'attempted_passes',
            alias: 'attempted_passes',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'completed_passes',
            alias: 'completed_passes',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'penalties_conceded',
            alias: 'penalties_conceded',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'big_chances_missed',
            alias: 'big_chances_missed',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'errors_leading_to_goal',
            alias: 'errors_leading_to_goal',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'errors_leading_to_goal_attempt',
            alias: 'errors_leading_to_goal_attempt',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'tackled',
            alias: 'tackled',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'offside',
            alias: 'offside',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'target_missed',
            alias: 'target_missed',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'fouls',
            alias: 'fouls',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'dribbles',
            alias: 'dribbles',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'element',
            alias: 'element',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'fixture',
            alias: 'fixture',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'opponent_team',
            alias: 'opponent_team',
            dataType: tableau.dataTypeEnum.int
        },{
            id: 'player_id',
            alias: 'player_id',
            dataType: tableau.dataTypeEnum.int,
            columnRole: tableau.columnRoleEnum.dimension
        }]

        var playerTableInfo = {
            id: 'playerinfo',
            alias: 'player information',
            columns: playercols
        };

        var teamTableInfo = {
            id: 'teaminfo',
            alias: 'team information',
            columns: teamcols
        };

        var fixtureTableInfo = {
            id: 'fixtureinfo',
            alias: 'fixture information',
            columns: fixturecols
        };

        var historyPastTableInfo = {
            id: 'historypastinfo',
            alias: 'history past season information',
            columns: historyPastcols
        };
		var historyTableInfo = {
            id: 'historyinfo',
            alias: 'history current season information',
            columns: historycols
        };

        schemaCallback([playerTableInfo, teamTableInfo, fixtureTableInfo, historyPastTableInfo, historyTableInfo]);
    };

    //Helper Function To Convert element_type to Position
    function getPosition(id) {
        var position = '';
        switch (id) {
            case 1:
                position = 'Goalkeeper';
                break;
            case 2:
                position = 'Defender';
                break;
            case 3:
                position = 'Midfielder';
                break;
            case 4:
                position = 'Forward';
                break;
        }
        return position;
    }

    //helper function to get player history past
    function getHistoryPast(counter, table, doneCallback) {
        noPlayers = parseInt(tableau.connectionData);
        myurl = myProxy + 'https://fantasy.premierleague.com/api/element-summary/' + counter.toString();
        $.getJSON(myurl, function(resp) {
            //console.log(counter);
            //console.log(resp);
            tableData = [];
		
			if ('history_past' in resp) {
				// Iterate over the JSON object
				for (var i = 0, len = resp.history_past.length; i < len; i++) {
					tableData.push({
						//'season_past_id': resp.history_past[i].id,
						'season_name': resp.history_past[i].season_name,
						'element_code': resp.history_past[i].element_code,
						'start_cost': resp.history_past[i].start_cost,
						'end_cost': resp.history_past[i].end_cost,
						'total_points': resp.history_past[i].total_points,
						'minutes': resp.history_past[i].minutes,
						'goals_scored': resp.history_past[i].goals_scored,
						'assists': resp.history_past[i].assists,
						'clean_sheets': resp.history_past[i].clean_sheets,
						'goals_conceded': resp.history_past[i].goals_conceded,
						'own_goals': resp.history_past[i].own_goals,
						'penalties_saved': resp.history_past[i].penalties_saved,
						'penalties_missed': resp.history_past[i].penalties_missed,
						'yellow_cards': resp.history_past[i].yellow_cards,
						'red_cards': resp.history_past[i].red_cards,
						'saves': resp.history_past[i].saves,
						'bonus': resp.history_past[i].bonus,
						'bps': resp.history_past[i].bps,
						'influence': resp.history_past[i].influence,
						'creativity': resp.history_past[i].creativity,
						'threat': resp.history_past[i].threat,
						'ict_index': resp.history_past[i].ict_index,
						//'ea_index': resp.history_past[i].ea_index,
						//'season': resp.history_past[i].season,
						'player_id': counter
					});
				}
			}
            table.appendRows(tableData);
            //doneCallback();
            //console.log(data.history_past[0].id);
            counter++;
            if (counter <= noPlayers) {
			//if (counter <= 20) {
                getHistoryPast(counter, table, doneCallback);
            } else {
                doneCallback();
            }
        });
    }
	
	//helper function to get player history for current season
    function getHistory(counter, table, doneCallback) {
        noPlayers = parseInt(tableau.connectionData);
        myurl = myProxy + 'https://fantasy.premierleague.com/api/element-summary/' + counter.toString();
        $.getJSON(myurl, function(resp) {
            //console.log(counter);
            //console.log(resp);
            tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = resp.history.length; i < len; i++) {
                tableData.push({
					'id': resp.history[i].id,
					'kickoff_time': resp.history[i].kickoff_time,
					'kickoff_time_formatted': resp.history[i].kickoff_time_formatted,
					'team_h_score': resp.history[i].team_h_score,
					'team_a_score': resp.history[i].team_a_score,
					'was_home': resp.history[i].was_home,
					'round': resp.history[i].round,
					'total_points': resp.history[i].total_points,
					'value': resp.history[i].value,
					'transfers_balance': resp.history[i].transfers_balance,
					'selected': resp.history[i].selected,
					'transfers_in': resp.history[i].transfers_in,
					'transfers_out': resp.history[i].transfers_out,
					'loaned_in': resp.history[i].loaned_in,
					'loaned_out': resp.history[i].loaned_out,
					'minutes': resp.history[i].minutes,
					'goals_scored': resp.history[i].goals_scored,
					'assists': resp.history[i].assists,
					'clean_sheets': resp.history[i].clean_sheets,
					'goals_conceded': resp.history[i].goals_conceded,
					'own_goals': resp.history[i].own_goals,
					'penalties_saved': resp.history[i].penalties_saved,
					'penalties_missed': resp.history[i].penalties_missed,
					'yellow_cards': resp.history[i].yellow_cards,
					'red_cards': resp.history[i].red_cards,
					'saves': resp.history[i].saves,
					'bonus': resp.history[i].bonus,
					'bps': resp.history[i].bps,
					'influence': resp.history[i].influence,
					'creativity': resp.history[i].creativity,
					'threat': resp.history[i].threat,
					'ict_index': resp.history[i].ict_index,
					'ea_index': resp.history[i].ea_index,
					'open_play_crosses': resp.history[i].open_play_crosses,
					'big_chances_created': resp.history[i].big_chances_created,
					'clearances_blocks_interceptions': resp.history[i].clearances_blocks_interceptions,
					'recoveries': resp.history[i].recoveries,
					'key_passes': resp.history[i].key_passes,
					'tackles': resp.history[i].tackles,
					'winning_goals': resp.history[i].winning_goals,
					'attempted_passes': resp.history[i].attempted_passes,
					'completed_passes': resp.history[i].completed_passes,
					'penalties_conceded': resp.history[i].penalties_conceded,
					'big_chances_missed': resp.history[i].big_chances_missed,
					'errors_leading_to_goal': resp.history[i].errors_leading_to_goal,
					'errors_leading_to_goal_attempt': resp.history[i].errors_leading_to_goal_attempt,
					'tackled': resp.history[i].tackled,
					'offside': resp.history[i].offside,
					'target_missed': resp.history[i].target_missed,
					'fouls': resp.history[i].fouls,
					'dribbles': resp.history[i].dribbles,
					'element': resp.history[i].element,
					'fixture': resp.history[i].fixture,
					'opponent_team': resp.history[i].opponent_team,
                    'player_id': counter
                });
            }
            table.appendRows(tableData);
            //doneCallback();
            //console.log(data.history_past[0].id);
            counter++;
            if (counter <= noPlayers) {
			//if (counter <= 10) {
                getHistory(counter, table, doneCallback);
            } else {
                doneCallback();
            }
        });
    }

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        //get player information
        if (table.tableInfo.id == 'playerinfo') {
            $.getJSON(myProxy + 'https://fantasy.premierleague.com/api/bootstrap-static/', function(resp) {
                tableData = [];

                // Iterate over the JSON object
                for (var i = 0, len = resp.elements.length; i < len; i++) {
                    var position = getPosition(resp.elements[i].element_type);
                    tableData.push({
                        'player_id': resp.elements[i].id,
                        //'photo': resp.elements[i].photo,
                        'photo': 'http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p' + resp.elements[i].code + '.png',
                        'web_name': resp.elements[i].web_name,
                        'status': resp.elements[i].status,
                        'playercode': resp.elements[i].code,
                        'first_name': resp.elements[i].first_name,
                        'second_name': resp.elements[i].second_name,
                        'squad_number': resp.elements[i].squad_number,
                        'news': resp.elements[i].news,
                        'now_cost': resp.elements[i].now_cost,
                        'chance_of_playing_this_round': resp.elements[i].chance_of_playing_this_round,
                        'chance_of_playing_next_round': resp.elements[i].chance_of_playing_next_round,
                        'value_form': resp.elements[i].value_form,
                        'value_season': resp.elements[i].value_season,
                        'cost_change_start': resp.elements[i].cost_change_start,
                        'cost_change_event': resp.elements[i].cost_change_event,
                        'cost_change_start_fall': resp.elements[i].cost_change_start_fall,
                        'cost_change_event_fall': resp.elements[i].cost_change_event_fall,
                        'in_dreamteam': resp.elements[i].in_dreamteam,
                        'dreamteam_count': resp.elements[i].dreamteam_count,
                        'selected_by_percent': resp.elements[i].selected_by_percent,
                        'form': resp.elements[i].form,
                        'transfers_out': resp.elements[i].transfers_out,
                        'transfers_in': resp.elements[i].transfers_in,
                        'transfers_out_event': resp.elements[i].transfers_out_event,
                        'transfers_in_event': resp.elements[i].transfers_in_event,
                        'loans_in': resp.elements[i].loans_in,
                        'loans_out': resp.elements[i].loans_out,
                        'loaned_in': resp.elements[i].loaned_in,
                        'loaned_out': resp.elements[i].loaned_out,
                        'total_points': resp.elements[i].total_points,
                        'event_points': resp.elements[i].event_points,
                        'points_per_game': resp.elements[i].points_per_game,
                        'ep_this': resp.elements[i].ep_this,
                        'ep_next': resp.elements[i].ep_next,
                        'special': resp.elements[i].special,
                        'minutes': resp.elements[i].minutes,
                        'goals_scored': resp.elements[i].goals_scored,
                        'assists': resp.elements[i].assists,
                        'clean_sheets': resp.elements[i].clean_sheets,
                        'goals_conceded': resp.elements[i].goals_conceded,
                        'own_goals': resp.elements[i].own_goals,
                        'penalties_saved': resp.elements[i].penalties_saved,
                        'penalties_missed': resp.elements[i].penalties_missed,
                        'yellow_cards': resp.elements[i].yellow_cards,
                        'red_cards': resp.elements[i].red_cards,
                        'saves': resp.elements[i].saves,
                        'bonus': resp.elements[i].bonus,
                        'bps': resp.elements[i].bps,
                        'influence': resp.elements[i].influence,
                        'creativity': resp.elements[i].creativity,
                        'threat': resp.elements[i].threat,
                        'ict_index': resp.elements[i].ict_index,
                        'ea_index': resp.elements[i].ea_index,
                        'element_type': resp.elements[i].element_type,
                        'team_id': resp.elements[i].team,
                        'position': position,
                        'full_name': resp.elements[i].first_name + ' ' + resp.elements[i].second_name
                    });
                }
                table.appendRows(tableData);
                doneCallback();
            });
        }

        //get team information 
        if (table.tableInfo.id == 'teaminfo') {
            $.getJSON(myProxy + 'https://fantasy.premierleague.com/api/bootstrap-static/', function(resp) {
                tableData = [];

                // Iterate over the JSON object
                for (var i = 0, len = resp.teams.length; i < len; i++) {
                    tableData.push({
                        'team_id': resp.teams[i].id,
                        //'next_event_fixture_is_home': resp.teams[i].next_event_fixture[0].is_home,
                        //'next_event_fixture_month': resp.teams[i].next_event_fixture[0].month,
                        //'next_event_fixture_event_day': resp.teams[i].next_event_fixture[0].event_day,
                        //'next_event_fixture_id': resp.teams[i].next_event_fixture[0].id,
                        //'next_event_fixture_day': resp.teams[i].next_event_fixture[0].day,
                        //'next_event_fixture_opponent': resp.teams[i].next_event_fixture[0].opponent,
                        'name': resp.teams[i].name,
                        'teamcode': resp.teams[i].code,
                        'short_name': resp.teams[i].short_name,
                        'unavailable': resp.teams[i].unavailable,
                        'strength': resp.teams[i].strength,
                        'position': resp.teams[i].position,
                        'played': resp.teams[i].played,
                        'win': resp.teams[i].win,
                        'loss': resp.teams[i].loss,
                        'draw': resp.teams[i].draw,
                        'points': resp.teams[i].points,
                        'form': resp.teams[i].form,
                        //'link_url': resp.teams[i].link_url,
                        'strength_overall_home': resp.teams[i].strength_overall_home,
                        'strength_overall_away': resp.teams[i].strength_overall_away,
                        'strength_attack_home': resp.teams[i].strength_attack_home,
                        'strength_attack_away': resp.teams[i].strength_attack_away,
                        'strength_defence_home': resp.teams[i].strength_defence_home,
                        'strength_defence_away': resp.teams[i].strength_defence_away,
                        'team_division': resp.teams[i].team_division
                    });
                }
                table.appendRows(tableData);
                doneCallback();
            });
        }

        //get fixture information 
        if (table.tableInfo.id == 'fixtureinfo') {
            $.getJSON(myProxy + 'https://fantasy.premierleague.com/api/fixtures/', function(resp) {
                tableData = [];

                // Iterate over the JSON object
                for (var i = 0, len = resp.length; i < len; i++) {
                    var position = getPosition(resp[i].element_type);
                    tableData.push({
                        'fixture_id': resp[i].id,
                        //'kickoff_time_formatted': resp[i].kickoff_time_formatted,
                        'started': resp[i].started,
                        //'event_day': resp[i].event_day,
                        //'deadline_time': resp[i].deadline_time,
                        //'deadline_time_formatted': resp[i].deadline_time_formatted,
                        'fixture_code': resp[i].code,
                        'kickoff_time': resp[i].kickoff_time,
                        'team_h_score': resp[i].team_h_score,
                        'team_a_score': resp[i].team_a_score,
                        'finished': resp[i].finished,
                        'minutes': resp[i].minutes,
                        'provisional_start_time': resp[i].provisional_start_time,
                        'finished_provisional': resp[i].finished_provisional,
                        'event': resp[i].event,
                        'team_a': resp[i].team_a,
                        'team_h': resp[i].team_h,
						'team_a_difficulty': resp[i].team_a_difficulty,
						'team_h_difficulty': resp[i].team_h_difficulty,
                    });
                }
                table.appendRows(tableData);
                doneCallback();
            });
        }

        //get past season information 
        if (table.tableInfo.id == 'historypastinfo') {
            var counter = 1;
            getHistoryPast(counter, table, doneCallback);
        }
		
		//get current season information 
        if (table.tableInfo.id == 'historyinfo') {
            var counter = 1;
            getHistory(counter, table, doneCallback);
        }
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $('#submitButton').click(function() {
            tableau.connectionName = 'Premier League Fantasy Football Feed'; // This will be the data source name in Tableau
            $.getJSON(myProxy + 'https://fantasy.premierleague.com/api/bootstrap-static/', function(resp) {
				//resp.toJSON();
                tableau.connectionData = resp.elements.length.toString();
                tableau.submit(); // This sends the connector object to Tableau
            });
        });
    });
})();