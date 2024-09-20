class TicTacToe
    def initialize
      @board = Array.new(9, " ")
      @current_player = "X"
    end
  
    def display_board
      puts <<-BOARD
       #{@board[0]} | #{@board[1]} | #{@board[2]} 
      ---+---+---
       #{@board[3]} | #{@board[4]} | #{@board[5]} 
      ---+---+---
       #{@board[6]} | #{@board[7]} | #{@board[8]} 
      BOARD
    end
  
    def play
      until game_over?
        display_board
        player_move
        switch_player
      end
      display_board
      if winner
        puts "玩家 #{winner} 獲勝了!"
      else
        puts "平局!"
      end
    end
  
    def player_move
      puts "玩家 #{@current_player}，請輸入 (1-9):"
      move = gets.chomp.to_i - 1
      if valid_move?(move)
        @board[move] = @current_player
      else
        puts "無效的移動，請重試。"
        player_move
      end
    end
  
    def valid_move?(move)
      move.between?(0, 8) && @board[move] == " "
    end
  
    def switch_player
      @current_player = @current_player == "X" ? "O" : "X"
    end
  
    def game_over?
      winner || @board.all? { |square| square != " " }
    end
  
    def winner
      winning_combinations.each do |combo|
        if @board[combo[0]] == @current_player &&
           @board[combo[1]] == @current_player &&
           @board[combo[2]] == @current_player
          return @current_player
        end
      end
      nil
    end
  
    def winning_combinations
      [
        [0, 1, 2], # 第一行
        [3, 4, 5], # 第二行
        [6, 7, 8], # 第三行
        [0, 3, 6], # 第一列
        [1, 4, 7], # 第二列
        [2, 5, 8], # 第三列
        [0, 4, 8], # 對角線
        [2, 4, 6]  # 對角線
      ]
    end
  end
  
  # 啟動遊戲
  game = TicTacToe.new
  game.play
  