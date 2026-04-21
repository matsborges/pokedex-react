// Pokémon Red - Guia Completo em Português
// Exportado como objeto JS para fácil integração no projeto

const pokemonRedGuide = {
  id: "red",
  title: "Pokémon Red",
  subtitle: "Guia Definitivo — Geração I",
  year: 1996,
  platform: "Game Boy",
  
  sections: [
    {
      id: "starter",
      title: "🌿 Escolha Inicial — Os Três Iniciais",
      content: `
Ao iniciar o jogo, o Professor Carvalho oferece três Pokémon. Sua escolha impacta toda a jornada.

**Bulbasaur (Nº 001) — Grass/Poison**
- Melhor escolha para iniciantes. Domina os dois primeiros ginásios com facilidade.
- Aprende Vine Whip cedo, Leech Seed para sustentação, Sleep Powder para capturar.
- Fraquezas: Fire, Ice, Flying, Psychic.
- Evolui para Ivysaur (nível 16) → Venusaur (nível 32).

**Charmander (Nº 004) — Fire**
- O mais difícil no início, mas recompensador. Brock e Misty são desafios reais.
- Charmeleon aprende Slash (alta taxa de crítico) e Charizard aprende Fly.
- Charizard é o starter mais amado da geração.
- Evolui para Charmeleon (nível 16) → Charizard (nível 36).

**Squirtle (Nº 007) — Water**
- Equilíbrio entre facilidade e poder. Fácil contra Brock, difícil contra Misty.
- Blastoise tem a maior Defense entre os starters. Excelente para o longo prazo.
- Aprende Bite e Skull Bash naturalmente — cobertura decente.
- Evolui para Wartortle (nível 16) → Blastoise (nível 36).

**Dica:** Independente de qual você escolher, Gary pegará o starter com vantagem de tipo contra o seu.
      `
    },
    {
      id: "pallet",
      title: "🏘️ Pallet Town — Cidade Inicial",
      content: `
**O que fazer aqui:**
- Fale com sua mãe antes de sair — ela vai salvar o progresso para você.
- Tente sair pela rota norte sem Pokémon: o Professor Carvalho te chama de volta e você recebe o starter.
- Após pegar o starter, explore a casa de Gary para conversar com a irmã dele, que dará a Pokedéx Town Map.

**Itens disponíveis:**
- Town Map (da irmã do Gary, na casa dele, após receber os starters)
- Potion (do Professor Carvalho após registrar o primeiro Pokémon na Pokédex — mas isso acontece em Viridian)

**Pokémon na área:**
- Rota 1 (sul→norte): Pidgey (comum), Rattata (comum)
      `
    },
    {
      id: "route1",
      title: "🛤️ Rota 1 — Pallet Town → Viridian City",
      content: `
**Pokémon disponíveis:**
- Pidgey (Lv 2-5) — comum. Vale capturar, evolui em Pidgeot.
- Rattata (Lv 2-4) — comum. Super Fang é útil mais tarde, mas não é priority.

**Itens:**
- Um NPC te dá uma Potion gratuita nessa rota (ao entrar vindo de Pallet).

**Dica de level:** Treine até Lv 5-7 antes de continuar. Faz diferença nos próximos encontros.
      `
    },
    {
      id: "viridian",
      title: "🌲 Viridian City",
      content: `
**Ginásio:** Fechado no início. Giovanni só é acessível no final do jogo.

**O que fazer:**
1. Entregue o Parcel para o Professor Carvalho em Pallet Town (item no PokéMart de Viridian).
2. Volte para Viridian — o velho na entrada te ensina como capturar Pokémon (obrigatório para acessar Viridian Forest).
3. PokéMart disponível: Potion, Antidote, Escape Rope, Repel.

**Itens na cidade:**
- Fresh Water (do velho à esquerda do PokéMart, uma vez por dia)

**Pokémon ao redor:**
- Rota 22 (oeste): Nidoran♂ (comum), Nidoran♀ (incomum), Mankey (Red apenas)
- Rota 2 (norte, antes da floresta): Pidgey, Rattata, Caterpie (Red)

**Dica:** Capture Nidoran♂ ou ♀ na Rota 22 agora. Nidoking/Nidoqueen são Pokémon poderosos e úteis por muito tempo.
      `
    },
    {
      id: "viridian-forest",
      title: "🌳 Viridian Forest",
      content: `
**Pokémon disponíveis:**
- Caterpie (Lv 3-5) — muito comum em Red. Evolui em Butterfree (Sleep Powder + Psybeam = útil).
- Metapod (Lv 4-7) — comum.
- Weedle (Lv 2-5) — comum. Evolui em Beedrill.
- Pikachu (Lv 3-5) — raro! Vale a captura se quiser.

**Treinadores na floresta:**
- Bug Catchers com Caterpie e Weedle. Bom XP no início.

**Itens:**
- Antidote (×2) — pego andando pela floresta
- Potion — no caminho principal
- Escape Rope — canto nordeste

**Dica:** Butterfree com Sleep Powder facilita muito as capturas nos próximos ginásios. Vale evoluir Caterpie até Butterfree antes de Pewter City.
      `
    },
    {
      id: "pewter",
      title: "⚔️ Pewter City — 1º Ginásio (Brock)",
      content: `
**Ginásio de Brock — Tipo: Rock/Ground**

**Treinadores internos:**
- Bug Catcher com Geodude (Lv 11)
- Brock (Líder)

**Time do Brock:**
- Geodude (Lv 12) — Rock/Ground
- Onix (Lv 14) — Rock/Ground

**Como vencer:**
- Bulbasaur: fácil. Vine Whip causa dano neutro, mas é o suficiente. Water Gun seria ideal.
- Squirtle: muito fácil. Water Gun/Bubble destroem.
- Charmander: DIFÍCIL. Não use ataques de fogo. Use Scratch + Growl para reduzir ataque. Beedrill ou Butterfree de Viridian Forest ajudam.
- Alternativa: Mankey (capturado na Rota 22) com Low Kick é super efetivo contra Rock.

**Recompensa:** Boulder Badge + TM34 (Bide)

**Itens em Pewter:**
- Museum (1F e 2F): Old Amber (use o Helix Fossil ou Dome Fossil que você pegar em Mt. Moon para resgatar depois em Cinnabar)
- Moon Stone (no museu, 2F, atrás do cientista — use Cut)

**Pokémon nas redondezas:**
- Rota 3 (leste): Spearow (comum, Red), Jigglypuff (incomum), Ekans (Red exclusivo)
      `
    },
    {
      id: "mtmoon",
      title: "🌑 Mt. Moon",
      content: `
**Uma das áreas mais importantes do início do jogo.**

**Pokémon disponíveis:**
- Zubat (Lv 6-12) — muito comum. Golbat tem boas stats, mas Zubat é irritante.
- Geodude (Lv 8-12) — comum. Golem é muito forte.
- Clefairy (Lv 8-12) — RARO. Vale muito capturar. Clefable é excelente.
- Paras (Lv 8-13) — comum. Spore (100% sono) é único e poderoso.
- Jigglypuff (Lv 6-11) — incomum. Wigglytuff tem HP alto.

**Treinadores:**
- Vários Rockets aqui pela primeira vez. Bom XP.
- Rocket com Rattata e Zubat nas salas internas.
- A dupla de cientistas no final que quer o Fossil.

**Fossils — Escolha UM:**
No final da caverna, você encontra dois Fossils. Só pode pegar um:
- **Dome Fossil** → Kabuto → Kabutops (Water/Rock, muito bom)
- **Helix Fossil** → Omanyte → Omastar (Water/Rock, melhor Special)

Ambos são resgatados no Lab de Cinnabar Island muito mais tarde.

**Itens:**
- TM12 (Water Gun) — útil agora
- Escape Rope
- Potion ×2
- Rare Candy (escondido, vale usar no Pokémon mais próximo de evoluir)
- Moon Stone (escondido no canto nordeste da 1F) — use em Clefairy para virar Clefable, ou guarde para Nidorina/Nidorino/Jigglypuff

**Dica:** Capture Clefairy aqui. É raro, mas vale o esforço. Clefable com Metronome é o caos controlado.
      `
    },
    {
      id: "cerulean",
      title: "💧 Cerulean City — 2º Ginásio (Misty)",
      content: `
**Ginásio de Misty — Tipo: Water**

**Treinadores internos:**
- Youngster com Slowpoke (Lv 17)
- Misty (Líder)

**Time da Misty:**
- Staryu (Lv 18) — Water
- Starmie (Lv 21) — Water/Psychic ⚠️

**Como vencer:**
- Bulbasaur/Ivysaur: cuidado com Starmie. Vine Whip funciona, mas Starmie tem bom Special.
- Pikachu/Raichu: Thunderbolt/Thundershock destroem. A rota de Pikachu aqui faz sentido.
- Qualquer Grass ou Electric resolve.
- Evite usar Fire, Normal, Ice.

**Recompensa:** Cascade Badge + TM11 (BubbleBeam)

**Itens em Cerulean:**
- Bike Voucher — pegue na Pokémon Fan Club em Vermilion, não aqui ainda.
- TM28 (Dig) — de um Rocket na casa ao norte do ginásio.
- Gold Teeth — não é aqui, mas lembre: você troca por Strength em Safari Zone.

**Pokémon nas redondezas:**
- Rota 24/25 (Cerulean Cape): Oddish (Red), Bellsprout (Blue), Abra (raro — difícil de capturar, foge), Venonat, Caterpie/Metapod
- Água (Surf): Tentacool, Horsea (mais tarde com Surf)

**Dica:** Abra foge no primeiro turno sempre. Use uma Poké Ball imediatamente ao encontrar. Kadabra e Alakazam têm o maior Special do jogo.

**Casa do Rocket (ao norte):**
- Após o ginásio, um Rocket rouba um Pokémon do Professor. Derrote-o na rota 24 para receber TM28 (Dig).
- Depois disso, Bill's House fica disponível na Rota 25.

**Bill's House (Rota 25):**
- Bill está preso em forma de Pokémon. Ajude-o para receber **S.S. Ticket** (acesso ao navio em Vermilion).
      `
    },
    {
      id: "route9-10",
      title: "🛤️ Rotas 9, 10 e Rock Tunnel",
      content: `
**Rota 9:**
- Pokémon: Rattata, Spearow, Ekans (Red)
- Treinadores: vários Youngsters e Jr. Trainers

**Rota 10 (Power Plant — mais tarde com Surf):**
- Power Plant: Voltorb, Magnemite, Magneton, Electabuzz (Red exclusivo), **Zapdos** (Lendário)

**Rock Tunnel (obrigatório — sem Flash é sofrimento):**
- Flash (TM70) reduz a escuridão. Pegue em Rota 2 via Cut, ou de um Abra Trainer.
- Pokémon: Zubat (irritante), Geodude, Machop, Onix

**Itens no Rock Tunnel:**
- Revive, Potion, Escape Rope, TM47 (Explosion — cuidado ao usar)

**Treinadores:**
- Vários Hikers e PokéManíacs — bom XP.
      `
    },
    {
      id: "vermilion",
      title: "⚡ Vermilion City — 3º Ginásio (Lt. Surge)",
      content: `
**Ginásio de Lt. Surge — Tipo: Electric**

**O puzzle do lixo:**
- Dois lixos escondem alavancas. A primeira é aleatória. A segunda está SEMPRE ao lado da primeira.
- Se errar, o padrão muda. Tente lixos adjacentes após encontrar o primeiro.

**Time do Lt. Surge:**
- Voltorb (Lv 21)
- Pikachu (Lv 18)
- Raichu (Lv 24) ⚠️

**Como vencer:**
- Ground type: Diglett/Dugtrio são imunes a Electric e causam dano ×2. Perfeito.
- Geodude/Graveler/Golem: também Ground, funciona bem.
- Evite Water e Flying.

**Recompensa:** Thunder Badge + TM24 (Thunderbolt) 🏆 — uma das melhores TMs do jogo.

**Itens em Vermilion:**
- Old Rod — do pescador na cidade. Pega Magikarp (meh) e Tentacool.
- Good Rod — de um pescador mais tarde (Fuchsia).
- Bike Voucher — do Presidente do Pokémon Fan Club (troque pela Bicycle no Cerulean PokéMart).
- S.S. Anne está ancorada aqui. Acesso com S.S. Ticket (de Bill).

**S.S. Anne:**
- Derrote Gary no navio.
- Cure o Capitão de enjoo → receba **HM01 (Cut)**. Necessário para avançar.
- Itens no navio: Great Ball, Revive, vários TMs.
- O navio parte após pegar Cut — não volte depois.

**Pokémon:**
- Diglett's Cave (noroeste): Diglett (fácil de capturar, Dugtrio é ótimo), Dugtrio (raro)
      `
    },
    {
      id: "lavender",
      title: "👻 Lavender Town & Pokémon Tower",
      content: `
**Lavender Town** é famosa pelo tema musical perturbador. A torre é assombrada pelos espíritos de Pokémon mortos.

**Pokémon Tower:**
- Gastly (Lv 14-21) — comum. Gengar tem stats excelentes.
- Haunter (Lv 21-28) — incomum. 
- Cubone (Lv 15-18) — incomum. Marowak com Thick Club é devastador.

**ATENÇÃO:** O espírito de Marowak no 5F **não pode ser capturado**. É um evento de história.

**Para acessar o topo:**
- Você precisa do **Silph Scope** (em Celadon City, na sede da Team Rocket).
- Sem o Silph Scope, os Gastly bloqueiam o progresso.

**No topo da torre:**
- Derrote os 3 Rockets.
- Libere o espírito de Marowak (batalha obrigatória, não capture).
- Mr. Fuji está prisioneiro no topo — libere-o para receber **Poké Flute** (acorda Snorlax).

**Snorlax (×2):**
- Um bloqueia a Rota 12 (sul de Lavender).
- Outro bloqueia a Rota 16 (oeste de Celadon).
- Use a Poké Flute para acordar e batalhar. Snorlax é Lv 30 — vale muito capturar (HP altíssimo, Amnesia, Rest).
      `
    },
    {
      id: "celadon",
      title: "🌿 Celadon City — 4º Ginásio (Erika)",
      content: `
**Ginásio de Erika — Tipo: Grass**

**Time da Erika:**
- Victreebel (Lv 29) — Grass/Poison
- Tangela (Lv 24) — Grass
- Vileplume (Lv 29) — Grass/Poison

**Como vencer:**
- Fire, Ice, Flying, Poison, Bug — qualquer um funciona.
- Charmander/Charmeleon/Charizard: momento de brilhar.

**Recompensa:** Rainbow Badge + TM21 (Mega Drain)

**Celadon é uma cidade enorme:**

**Game Corner:**
- Compre fichas (caro) ou aче fichas no chão pelo cassino.
- Prêmios: Abra (120 fichas), Clefairy (500), Scyther (5500 — Red), Pinsir (2500 — Blue), Dratini (2800), Porygon (9999).
- **Dratini** é o mais valioso — Dragonite no final do jogo.
- TM23 (Dragon Rage) — 3300 fichas.

**Rocket Hideout (Game Corner — alavanca atrás do poster):**
- Dungeonão da Team Rocket. Vários andares.
- Derrote Giovanni (Onix Lv 25, Rhyhorn Lv 24, Kangaskhan Lv 29).
- Recompensa: **Silph Scope** — necessário para a Pokémon Tower.

**Itens no Rocket Hideout:**
- TM07 (Horn Drill), TM12 (Water Gun), TM01 (Mega Punch), TM05 (Mega Kick)
- Escape Rope ×2, vários itens espalhados.

**Celadon Department Store (7 andares):**
- 2F: TMs raras (TM18 Counter, TM08 Body Slam, TM09 Take Down, TM17 Submission, TM11 BubbleBeam, TM13 Ice Beam, TM30 Teleport, TM35 Metronome, TM38 Fire Blast, TM33 Reflect, TM22 SolarBeam)
- 4F: Ether, Max Ether, Elixir
- 5F: Revive, Leaf Stone, Thunder Stone, Fire Stone, Water Stone
- Rooftop: Sodas (Fresh Water, Soda Pop, Lemonade) — mais baratas que Potions, compre bastante.

**Pedras de evolução aqui:**
- Fire Stone → Vulpix (Red), Growlithe (Red), Eevee→Flareon
- Water Stone → Eevee→Vaporeon, Poliwag→Poliwrath, Shellder→Cloyster, Staryu→Starmie
- Thunder Stone → Eevee→Jolteon, Pikachu→Raichu
- Leaf Stone → Weepinbell→Victreebel, Gloom→Vileplume, Exeggcute→Exeggutor

**Eevee:**
- Encontre no topo do Celadon Mansion (entre pela entrada dos fundos). Eevee em Lv 25 dentro de um item ball.
- Evolua conforme sua estratégia: Vaporeon (melhor HP), Jolteon (melhor Speed), Flareon (melhor Attack).
      `
    },
    {
      id: "silph-co",
      title: "🏢 Saffron City & Silph Co.",
      content: `
**Saffron City** tem dois ginásios — mas Sabrina é o oficial. O Fighting Dojo é opcional.

**Fighting Dojo:**
- Derrote o mestre para receber **Hitmonlee** ou **Hitmonchan** (escolha um).
- Hitmonlee: mais Attack, mais Speed, Hi Jump Kick poderoso.
- Hitmonchan: mais Defense, aprende socos elementais (Fire/Ice/Thunder Punch via TM).

**Silph Co. (11 andares — infestado de Rockets):**
- Gary aparece para batalhar no 7F.
- Giovanni é o chefe final no 11F.

**Time do Giovanni em Silph Co.:**
- Nidorino (Lv 37), Kangaskhan (Lv 35), Rhyhorn (Lv 37), Nidoqueen (Lv 41)

**Recompensa de derrotar Giovanni:** **Lapras** (presente de um funcionário da Silph Co. — Lv 15, Water/Ice, excelente Pokémon)

**Itens na Silph Co.:**
- TM36 (Selfdestruct), TM09 (Take Down), Rare Candy ×2
- Master Ball — no escritório do presidente após derrotar Giovanni (**ÚNICA no jogo — guarde para Mewtwo**)
- Card Key — necessário para abrir portas (5F)
- Vários itens espalhados pelos andares.

**Ginásio de Sabrina — Tipo: Psychic**

**Time da Sabrina:**
- Kadabra (Lv 38), Mr. Mime (Lv 37), Venomoth (Lv 38), Alakazam (Lv 43) ⚠️

**Como vencer:**
- Bug type é super efetivo contra Psychic em Gen I (Scyther, Pinsir, Beedrill).
- Ghost deveria ser efetivo, mas por um glitch de Gen I, é INEFETIVO contra Psychic.
- Pokémon fortes com alta Attack e cobertura ampla funcionam.

**Recompensa:** Marsh Badge + TM46 (Psywave)
      `
    },
    {
      id: "fuchsia",
      title: "🎯 Fuchsia City — 5º Ginásio (Koga)",
      content: `
**Ginásio de Koga — Tipo: Poison**

**Puzzle:** Paredes invisíveis. Navegue tentando passar por onde não parece ter saída.

**Time do Koga:**
- Koffing (Lv 37), Muk (Lv 39), Koffing (Lv 37), Weezing (Lv 43) ⚠️

**Como vencer:**
- Ground e Psychic são super efetivos contra Poison.
- Koga usa Smokescreen, Toxic e Minimize — seja rápido.

**Recompensa:** Soul Badge + TM06 (Toxic)

**HM Surf:**
- Na casa ao lado do Safari Zone. Um velho te dá **HM03 (Surf)** após navegar no Safari Zone.
- Surf é obrigatório para continuar o jogo.

**Good Rod:**
- Um pescador em Fuchsia dá a Good Rod. Pesca Poliwag, Goldeen, Krabby.

**Super Rod:**
- No Pokémon Lab do Safari Zone (entrada). Pesca Dratini no Safari Zone (com Super Rod + sorte).

**Safari Zone:**
- Entrada custa 500 Pokédollars. 500 passos disponíveis. Mecânica especial: não luta, apenas atira Safari Balls e Rocks/Bait.
- **Pokémon exclusivos e raros aqui:**
  - Nidoran♂/♀ (comum)
  - Exeggcute (incomum)
  - Kangaskhan (raro) — único lugar!
  - Scyther (Red exclusivo, raro) — pegar aqui ou na Game Corner
  - Pinsir (Blue exclusivo, raro)
  - Chansey (muito raro) — alta HP, Softboiled
  - Tauros (raro) — Strong, Good Stats
  - Rhyhorn (incomum)
  - Parasect (incomum)
  - Venomoth (incomum)

- **Itens escondidos no Safari Zone:**
  - HM04 (Strength) — área 2
  - Gold Teeth — área 4 (troque por HM04 Strength com o velho em Fuchsia — mas na verdade você recebe Strength do velho em troca dos Gold Teeth)
  - TM37 (Egg Bomb), TM40 (Skull Bash)
      `
    },
    {
      id: "seafoam",
      title: "🧊 Seafoam Islands",
      content: `
**Localização:** Entre Fuchsia e Cinnabar Island (Rota 20), acessível com Surf.

**Pokémon disponíveis:**
- Zubat, Golbat (comum)
- Seel (incomum) → Dewgong
- Slowpoke (incomum) → Slowbro
- Horsea (com Super Rod) → Seadra
- Krabby (com Super Rod) → Kingler
- Psyduck (incomum)

**Puzzle das pedras:**
- Use Strength para empurrar pedras e bloquear as correntezas.
- Bloqueie as 4 correntezas para acessar o fundo onde está Articuno.

**Articuno (Lendário — Lv 50, Ice/Flying):**
- Salve antes de batalhar! É difícil de capturar.
- Use Ultra Ball (noturno ou em sono é melhor).
- Articuno: Blizzard, Mist, Ice Beam, Agility. Cuidado com Blizzard (Alta chance de congelar).
      `
    },
    {
      id: "cinnabar",
      title: "🔥 Cinnabar Island — 7º Ginásio (Blaine)",
      content: `
**Cinnabar Island** tem o Pokémon Lab, o ginásio e acesso à Mansion.

**Pokémon Mansion:**
- Obrigatório para pegar a **Secret Key** que abre o ginásio de Blaine.
- Pokémon: Growlithe (Red exclusivo), Grimer, Muk, Koffing, Weezing, Magmar (Red exclusivo, Lv 28-38)
- **Magmar** é exclusivo de Red e é ótimo Pokémon de fogo.

**Itens na Mansion:**
- Secret Key (necessária para abrir o Gym)
- TM14 (Blizzard), TM22 (SolarBeam), TM36 (Selfdestruct)
- Calcium, Carbos, Iron (Vitaminas para stats)

**Pokémon Lab de Cinnabar:**
- Traga seus Fossils (Dome ou Helix) para ressuscitar Kabuto/Omanyte.
- Traga o **Old Amber** do Museu de Pewter para receber **Aerodactyl** (Rock/Flying, altíssima Speed).
- Troque Pokémon com os cientistas para receber:
  - Rhydon (troque Lickitung — apenas se você capturou Lickitung nas Rotas safárias)

**Ginásio de Blaine — Tipo: Fire**

**Puzzle:** Quiz de perguntas sobre Pokémon. Erre para batalhar com treinadores.

**Time do Blaine:**
- Growlithe (Lv 42), Ponyta (Lv 40), Rapidash (Lv 42), Arcanine (Lv 47) ⚠️

**Como vencer:**
- Water, Rock, Ground são super efetivos.
- Surf destrói tudo aqui.

**Recompensa:** Volcano Badge + TM38 (Fire Blast)

**Glitch do Mew (Rota 24/25 — OPCIONAL):**
- Este é o famoso glitch para capturar Mew sem eventos especiais.
- 1. Vá para Rota 24. NÃO entre em batalha com o Youngster com Slowpoke (Lv 17).
- 2. Salve. Dê um passo em direção ao Youngster → pressione Start antes de ele te ver → use Fly/Teleport para fugir.
- 3. O menu ficará bloqueado. Viaje para Cerulean City.
- 4. Lute contra o Trainer que você pulou (ele vai te desafiar automaticamente ao voltar).
- 5. Após derrotá-lo, use Fly para voltar à Rota 24. O menu abre com batalha aleatória — será Mew (Lv 7)!
- 6. Capture com qualquer Poké Ball.
      `
    },
    {
      id: "saffron-gym",
      title: "🥊 Ginásio de Saffron (Revisita) e Rota 12-16",
      content: `
**Já coberto em Saffron/Silph Co., mas vale lembrar a ordem:**
1. Celadon Game Corner → Silph Scope
2. Pokémon Tower (Lavender) → Poké Flute
3. Acorde Snorlax → Rota 12 e Rota 16
4. Surf disponível após Fuchsia → novas áreas

**Rota 12-13-14-15 (Sul de Lavender):**
- Pokémon: Weepinbell (Red), Gloom (Blue), Farfetch'd (troque Spearow com NPC em Vermilion), Venonat
- Com Super Rod: Krabby, Kingler

**Rota 16-17-18 (Ciclista):**
- Pokémon: Doduo (Red, incomum), Rattata, Ekans (Red)
- **HM02 (Fly):** Uma garota no edifício da Rota 16 dá Fly após você entrar pelo buraco na cerca (use Cut).
      `
    },
    {
      id: "viridian-gym",
      title: "🏆 Viridian City — 8º Ginásio (Giovanni)",
      content: `
**Ginásio de Giovanni — Tipo: Ground**

**Puzzle:** Spinners no chão que giram sua direção.

**Treinadores internos:**
- Cooltrainers com Pokémon Ground/Rock de nível 40-50.

**Time do Giovanni:**
- Rhyhorn (Lv 45), Dugtrio (Lv 42), Nidoqueen (Lv 44), Nidoking (Lv 45), Rhydon (Lv 50) ⚠️

**Como vencer:**
- Water e Ice destroem. Surf + Ice Beam.
- Grass também é útil.
- Evite Electric (Ground é imune).

**Recompensa:** Earth Badge + TM27 (Fissure — OHKO move, 30% accuracy) — não é muito útil.

**Após o 8º Badge:**
- Acesso à Rota 22 → Victory Road → Elite Four.
      `
    },
    {
      id: "victory-road",
      title: "🗻 Victory Road",
      content: `
**Victory Road** é a caverna antes da Pokémon League.

**Pokémon disponíveis:**
- Zubat/Golbat (muito comum)
- Geodude/Graveler (comum)
- Onix (incomum)
- Machop/Machoke (incomum)
- Venomoth (raro)
- **Moltres (Lendário — Lv 50, Fire/Flying):** No 2F, use Strength para empurrar pedras e acessá-lo. É o único Moltres do jogo — salve antes!

**Itens:**
- TM43 (Sky Attack), TM13 (Ice Beam), Full Restore, Max Revive

**Puzzle:** Pedras com Strength precisam ser empurradas para os pedestal certos para abrir a passagem.

**Dica:** Prepare o time para Lv 50+ antes de entrar na Pokémon League. A Elite Four não permite saída para curar.
      `
    },
    {
      id: "elite-four",
      title: "👑 Elite Four & Campeão",
      content: `
**Prepare-se bem. Sem saída para curar entre batalhas.**

**Itens recomendados:**
- Max Potion / Full Restore ×20+
- Max Revive ×10+
- Full Heal (cura status)
- Elixir/Ether para PP
- Antídoto, Awakening, Ice Heal

---

**Lorelei — Tipo: Ice/Water**
- Dewgong (Lv 54), Cloyster (Lv 53), Slowbro (Lv 54), Jynx (Lv 56), Lapras (Lv 60) ⚠️
- Como vencer: Electric (vs Water), Grass, Fire, Fighting (vs Ice).
- Cuidado: Lorelei usa Double Team e Rest para stall. Seja agressivo.

---

**Bruno — Tipo: Fighting/Rock**
- Onix (Lv 53), Hitmonchan (Lv 55), Hitmonlee (Lv 55), Onix (Lv 56), Machamp (Lv 58) ⚠️
- Como vencer: Psychic, Water (Onix), Flying.
- O mais fácil da Elite Four.

---

**Agatha — Tipo: Ghost/Poison**
- Gengar (Lv 54), Haunter (Lv 53), Gengar (Lv 58), Arbok (Lv 56), Gengar (Lv 60) ⚠️
- Como vencer: Glitch de Gen I — Ghost não funciona contra Psychic e vice versa. Use Psychic ou Ground.
- Agatha usa Confuse Ray e Hypnosis — tenha Full Heal ou Persim Berry.

---

**Lance — Tipo: Dragon**
- Gyarados (Lv 58), Dragonair (Lv 56), Dragonair (Lv 56), Aerodactyl (Lv 60), Dragonite (Lv 62) ⚠️
- Como vencer: Ice destrói Dragon/Flying. Blizzard, Ice Beam. Jynx ajuda.
- Aerodactyl é fraco a Water, Electric, Ice, Rock.
- Dragonite: cuidado com Hyper Beam.

---

**Gary (Campeão) — Time varia conforme seu starter:**

*Se você escolheu Bulbasaur, Gary tem:*
- Pidgeot (Lv 61), Alakazam (Lv 59), Rhydon (Lv 61), Exeggutor (Lv 61), Gyarados (Lv 61), Charizard (Lv 65) ⚠️

*Se você escolheu Charmander, Gary tem:*
- Pidgeot (Lv 61), Alakazam (Lv 59), Rhydon (Lv 61), Exeggutor (Lv 61), Gyarados (Lv 61), Blastoise (Lv 65) ⚠️

*Se você escolheu Squirtle, Gary tem:*
- Pidgeot (Lv 61), Alakazam (Lv 59), Rhydon (Lv 61), Exeggutor (Lv 61), Gyarados (Lv 61), Venusaur (Lv 65) ⚠️

**Como vencer Gary:**
- Pidgeot: Electric ou Ice
- Alakazam: qualquer ataque forte (baixa Defense). Dark seria ideal mas não existe em Gen I.
- Rhydon: Water, Grass, Ice
- Exeggutor: Fire, Ice, Bug, Flying, Poison
- Gyarados: Electric
- Starter dele: use seu starter ou cobertura de tipo

**Após vencer:** Você é o Campeão Pokémon! Créditos e acesso ao Hall of Fame.
      `
    },
    {
      id: "postgame",
      title: "🌊 Pós-jogo — Cerulean Cave & Mewtwo",
      content: `
**Cerulean Cave (ao norte de Cerulean City — acessível após se tornar Campeão)**

**Pokémon na caverna:**
- Golbat (muito comum)
- Ditto (incomum) — único lugar para capturar Ditto!
- Kadabra, Rhydon, Machoke, Parasect, Magneton, Venomoth, Marowak (raro)

**Mewtwo — O mais forte do jogo (Lv 70, Psychic):**
- Está no fundo da Cerulean Cave.
- **USE A MASTER BALL AQUI.** É a única forma garantida de capturá-lo sem quebrar as Ultra Balls.
- Se já usou a Master Ball, use estratégia: durma-o (Sleep Powder, Spore), reduza HP ao vermelho, spam Ultra Balls.
- Mewtwo tem Psystrike (devastador), Recover (se cura), Amnesia (aumenta Special).
- Salve ANTES de batalhar.

**Stats de Mewtwo:** O maior Special e Speed de qualquer Pokémon em Gen I.

**Pokémon exclusivos de Red não capturados ainda:**
- Ekans/Arbok (Rotas próximas a Lavender/Viridian)
- Oddish/Gloom/Vileplume (várias rotas)
- Growlithe/Arcanine (Pokémon Mansion, Red)
- Scyther (Safari Zone ou Game Corner)
- Electabuzz (Power Plant, Red)
- Magmar (Pokémon Mansion, Red)
- Pinsir aparece em Blue — troque para completar a Pokédex.

**Diploma de conclusão:**
- Complete toda a Pokédex (151 Pokémon) e vá ao Game Freak Office em Celadon City.
- O desenvolvedor te dá um **Diploma** — a maior conquista do jogo.
      `
    },
    {
      id: "legendary",
      title: "⭐ Todos os Lendários",
      content: `
**Os 5 Lendários de Pokémon Red:**

**Articuno (Lv 50) — Ice/Flying**
- Local: Seafoam Islands (fundo, após puzzle das pedras)
- Fraquezas: Rock, Electric, Fire, Steel
- Moveset: Blizzard, Mist, Ice Beam, Agility

**Zapdos (Lv 50) — Electric/Flying**
- Local: Power Plant (Rota 10, acessível com Surf)
- Fraquezas: Ice, Rock
- Moveset: Thunderbolt, Drill Peck, Thunder Wave, Light Screen

**Moltres (Lv 50) — Fire/Flying**
- Local: Victory Road (2F)
- Fraquezas: Water, Rock, Electric
- Moveset: Fire Spin, Leer, Agility, Sky Attack

**Mewtwo (Lv 70) — Psychic**
- Local: Cerulean Cave (pós-jogo)
- Fraquezas: Bug, Ghost, Dark (mas Ghost é inefetivo por glitch em Gen I — use Bug)
- Moveset: Psystrike, Swift, Recover, Amnesia
- **Use a Master Ball aqui.**

**Mew (Lv 7) — Psychic** *(via glitch)*
- Local: Rota 24 (via glitch do menu descrito na seção de Cinnabar)
- Aprende qualquer TM/HM — o Pokémon mais versátil do jogo.
      `
    },
    {
      id: "hidden-items",
      title: "🎁 Itens Secretos & Raros",
      content: `
**Itens escondidos notáveis (use o botão A em lugares suspeitos):**

| Item | Localização |
|------|-------------|
| Rare Candy | Mt. Moon (1F, canto), S.S. Anne (cabine), Celadon Mansion, Silph Co. (7F), Safari Zone |
| Moon Stone | Mt. Moon (canto NE da 1F), Pewter Museum (2F com Cut) |
| Ether | Rota 3, Celadon 4F, Victory Road |
| Elixir | Celadon 4F, Victory Road |
| Max Elixir | Victory Road, Cerulean Cave |
| PP Up | Silph Co., Rota 12 |
| HP Up / Protein | Silph Co., Celadon Dept Store |
| Nugget | Rota 25 (ao derrotar todos os 5 trainers no Nugget Bridge, o 6º "presente" é uma armadilha Rocket — batalhe e receba o Nugget após) |

**TMs valiosas:**
| TM | Move | Localização |
|----|------|-------------|
| TM24 | Thunderbolt | Lt. Surge (Reward) |
| TM26 | Earthquake | Silph Co. |
| TM29 | Psychic | Saffron City (casa ao sul) |
| TM15 | Hyper Beam | Celadon Dept Store (compra) |
| TM38 | Fire Blast | Blaine (Reward) |
| TM25 | Thunder | Celadon Dept Store |
| TM14 | Blizzard | Pokémon Mansion / Celadon |
| TM22 | SolarBeam | Pokémon Mansion |
      `
    },
    {
      id: "trade-pokemon",
      title: "🔄 Pokémon por Troca In-Game",
      content: `
**NPCs oferecem trocas por Pokémon específicos. Os Pokémon trocados ganham XP extra (bônus de troca).**

| Você entrega | Você recebe | Onde |
|-------------|------------|------|
| Spearow | Farfetch'd (Normal/Flying) | Vermilion City (NPC dentro da cidade) |
| Poliwhirl | Jynx (Ice/Psychic, Lv 15) | Cerulean City (casa acima do ginásio) |
| Rhydon | ? (varia) | Cinnabar Lab |
| Lickitung | ? | Pokémon Lab Cinnabar |

**Dica:** Farfetch'd com Stick tem Critical Hit altíssimo. Jynx é útil para Lance (Elite Four).

**Exclusivos para completar a Pokédex — troque com Blue:**
- Sandshrew/Sandslash (Blue) → Ekans/Arbok (Red)
- Vulpix/Ninetales (Blue) → Growlithe/Arcanine (Red)
- Meowth/Persian (Blue) → Mankey/Primeape (Red)
- Bellsprout/Weepinbell/Victreebel (Blue) → Oddish/Gloom/Vileplume (Red)
- Magmar (Red) ↔ Electabuzz (Blue)
- Scyther (Red) ↔ Pinsir (Blue)
      `
    },
    {
      id: "tips",
      title: "💡 Dicas Gerais e Glitches Famosos",
      content: `
**Dicas de Progresso:**
- Sempre tenha Repel em zonas de Zubat (Mt. Moon, Rock Tunnel, Victory Road).
- Ensine Surf, Fly, Cut e Strength para Pokémon que não são do seu time principal — libere HMs sem desperdiçar moveset.
- Poliwrath aprende tanto Surf quanto Strength. Prático.
- TM29 (Psychic) é a move mais útil do jogo em Gen I — ensine para quem tiver Special alto.
- Dragonair/Dragonite aprendem Surf, Thunder, Blizzard e Fire Blast por TM — cobertura total.

**Glitches Famosos:**
- **Missingno:** Surfe na costa leste de Cinnabar Island (Rota 21) após falar com o velho em Viridian (que ensina a capturar). Você encontra Missingno (ou 'M) — um Pokémon glitch. Batalhar com ele duplica o 6º item da bag. Use isso para duplicar Rare Candy, Nuggets ou Master Balls (risky, mas funciona).
- **Mew Glitch:** Descrito na seção de Cinnabar Island.
- **Ghost vs Psychic:** Por um glitch, Ghost não causa dano a Psychic em Gen I. Gengar não funciona contra Alakazam.
- **Special Stat split:** Em Gen I, Special Attack e Special Defense são a mesma stat (Special). Pokémon com alto Special são dominantes tanto na ofensiva quanto defensiva.
- **Hyper Beam:** Em Gen I, se Hyper Beam nocautear o oponente, não precisa recarregar. Abuse isso.
- **Freeze status:** Congelamento em Gen I é permanente até ser atingido por um Fire Move. Articuno e Lapras são temidos por isso.

**Time Recomendado para Completar o Jogo:**
1. Charizard / Blastoise / Venusaur (seu starter)
2. Alakazam (Psychic dominante em Gen I)
3. Lapras (Water/Ice, tanque)
4. Rhydon ou Golem (Ground/Rock, cobertura)
5. Starmie (Water/Psychic, muito versátil)
6. Dragonite ou Gengar (poder bruto)
      `
    }
  ]
};

export default pokemonRedGuide;
