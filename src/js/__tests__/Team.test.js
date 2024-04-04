import Team from '../Team';
import Character from '../Character';

test('should Team', () => {

  const bowmanOleg = new Character('Oleg', 'Bowman');
  const magicianOlga = new Character('Olga', 'Magician');
  const bowmanIvan = new Character('Ivan', 'Bowman');

  const team = new Team();
  team.add(bowmanOleg);
  team.add(magicianOlga);
  team.add(bowmanIvan);

  expect([...team.members]).toEqual([bowmanOleg, magicianOlga, bowmanIvan]);
});

test('should Error', () => {

  const bowmanOleg = new Character('Oleg', 'Bowman');
  const magicianOlga = new Character('Olga', 'Magician');
  const bowmanIvan = new Character('Ivan', 'Bowman');

  const team = new Team();
  team.add(bowmanOleg);
  team.add(magicianOlga);
  team.add(bowmanIvan);

  expect(() => team.add(bowmanIvan)).toThrow('такой персонаж уже существует в команде!');
});

test('should addAll', () => {
  const bowmanOleg = new Character('Oleg', 'Bowman');
  const magicianOlga = new Character('Olga', 'Magician');

  const team = new Team();
  team.addAll(magicianOlga, bowmanOleg);

  expect(team.toArray()).toEqual([magicianOlga, bowmanOleg]);
});

test('should toArray', () => {
  const bowmanOleg = new Character('Oleg', 'Bowman');
  const magicianOlga = new Character('Olga', 'Magician');

  const team = new Team();
  team.add(bowmanOleg);
  team.add(magicianOlga);

  expect(team.toArray()).toEqual([bowmanOleg, magicianOlga]);
});