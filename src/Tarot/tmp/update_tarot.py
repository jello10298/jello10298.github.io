import json

# Read filenames from files.txt
with open('files.txt', 'r') as f:
    filenames = [line.strip() for line in f.readlines()]

# Load tarot.json
with open('tarot.json', 'r') as f:
    tarot = json.load(f)

# Ensure that filenames and tarot cards match in number
# assert len(filenames) == len(tarot)

# Add filenames to tarot cards
for card, filename in zip(tarot, filenames):
    card['image'] = filename

# Write the updated tarot cards back to tarot.json
with open('tarot.json', 'w') as f:
    json.dump(tarot, f, indent=4)
