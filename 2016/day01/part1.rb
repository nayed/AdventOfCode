file = File.new("input.txt", "r").gets

def change_state(state, dir)
  directions = "NESW"
  i = "NESW".index(state)
  if dir == "R"
    directions[i+1] ? directions[i+1] : "N"
  else
    directions[i-1] ? directions[i-1] : "W"
  end
end

current = { x: 0, y: 0 }
state = "N"

file.split(', ').each do |instr|
  direction = instr[0]
  steps = instr[1..-1].to_i
  state = change_state(state, direction)
  case state
  when "N"
    current[:y] += steps
  when "E"
    current[:x] += steps
  when "S"
    current[:y] -= steps
  when "W"
    current[:x] -= steps
  end
end

puts "Block away: #{current[:x] + current[:y]}"
