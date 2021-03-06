// Sorceress config file

/* Brief instructions:
 * Notepad++ is HIGHLY recommended to use for editing these files. Visit http://notepad-plus-plus.org/
 * To comment out something, put // in front of that line
 * !!!Never comment out something you're not sure about, set it to false or disable as noted in description if you don't want to use it.
 * true and false are case sensitive. Good: Config.SomeVar = true; Bad: Config.SomeVar = True;
 */

function LoadConfig() {
	/* Sequence config
	 * Set to true if you want to run it, set to false if not.
	 * If you want to change the order of the scripts, just change the order of their lines by using cut and paste.
	 */
	 
	// User addon script. Read the description in libs/bots/UserAddon.js
	Scripts.UserAddon = false; // !!!YOU MUST SET THIS TO FALSE IF YOU WANT TO RUN BOSS/AREA SCRIPTS!!!
	
	// Team MF system
	Config.MFLeader = false; // Set to true if you have one or more MFHelpers. Opens TP and gives commands when doing normal MF runs.

	// Boss/area scripts

	// *** act 1 ***
	Scripts.Corpsefire = false;
		Config.Corpsefire.ClearDen = false;
	Scripts.Mausoleum = false;
		Config.Mausoleum.KillBloodRaven = false;
		Config.Mausoleum.ClearCrypt = false;
	Scripts.Rakanishu = false;
		Config.Rakanishu.KillGriswold = false;
	Scripts.UndergroundPassage = false;
	Scripts.Coldcrow = false;
	Scripts.Tristram = false;
		Config.Tristram.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Pit = false;
		Config.Pit.ClearPit1 = true;
	Scripts.Treehead = false;
	Scripts.Smith = false;
	Scripts.BoneAsh = false;
	Scripts.Countess = false; //{ ClearType:0x7, StaticList: [45], TeleStomp: true, Dodge: false, SkipImmune: [] };
		Config.Countess.KillGhosts = true;
	Scripts.Andariel = false;
	Scripts.Cows = false;
    
	// *** act 2 ***
	Scripts.Radament = false;
	Scripts.Coldworm = false;
		Config.Coldworm.KillBeetleburst = false;
		Config.Coldworm.ClearMaggotLair = false; // Clear all 3 levels
	Scripts.AncientTunnels = false;
		Config.AncientTunnels.OpenChest = true; // Open special chest in Lost City
		Config.AncientTunnels.KillDarkElder = false;
	Scripts.Summoner = false;
		Config.Summoner.FireEye = false;
	Scripts.Tombs = false;
	Scripts.Duriel = false;
    
	// *** act 3 ***
	Scripts.Stormtree = false;
	Scripts.KurastTemples = false;
	Scripts.Icehawk = false;
	Scripts.Endugu = false;
	Scripts.Travincal = false;
		Config.Travincal.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Mephisto = false;
		Config.Mephisto.MoatTrick = false;
		Config.Mephisto.KillCouncil = false;
		Config.Mephisto.TakeRedPortal = true;
    
	// *** act 4 ***
	Scripts.OuterSteppes = false;
	Scripts.Izual = false;
	Scripts.Hephasto = false;
	Scripts.Vizier = false; // Intended for classic sorc, kills Vizier only.
	Scripts.FastDiablo = false;
	Scripts.Diablo = true;
		Config.Diablo.Entrance = true; // Start from entrance
		//Config.Diablo.SealWarning = "Leave the seals alone!";
		//Config.Diablo.EntranceTP = "Entrance TP up";
		//Config.Diablo.StarTP = "Star TP up";
		//Config.Diablo.DiabloMsg = "Diablo";
	Scripts.SealLeader = false; // Clear a safe spot around seals and invite leechers in. Leechers should run SealLeecher script. Don't run with Diablo or FastDiablo.
    
	// *** act 5 ***
	Scripts.Pindleskin = false;
		Config.Pindleskin.UseWaypoint = false;
		Config.Pindleskin.KillNihlathak = true;
		Config.Pindleskin.ViperQuit = true; // End script if Tomb Vipers are found.
	Scripts.Nihlathak = false;
		Config.Nihlathak.ViperQuit = false; // End script if Tomb Vipers are found.
	Scripts.Eldritch = false;
		Config.Eldritch.OpenChest = true;
		Config.Eldritch.KillShenk = true;
		Config.Eldritch.KillDacFarren = false;
	Scripts.Eyeback = false;
	Scripts.SharpTooth = false;
	Scripts.ThreshSocket = false;
	Scripts.Abaddon = false;
	Scripts.Frozenstein = false;
		Config.Frozenstein.ClearFrozenRiver = false;
	Scripts.Bonesaw = false;
		Config.Bonesaw.ClearDrifterCavern = false;
	Scripts.Snapchip = false;
		Config.Snapchip.ClearIcyCellar = false;
	Scripts.Worldstone = false;
	Scripts.Baal = true;
		//Config.Baal.HotTPMessage = "Hot TP!";
		//Config.Baal.SafeTPMessage = "Safe TP!";
		//Config.Baal.BaalMessage = "Baal!";
		Config.Baal.SoulQuit = true; // End script if Souls (Undead Soul Killers) are found.
		Config.Baal.DollQuit = true; // End script if Dolls (Undead Stigyan Dolls) are found.
		Config.Baal.KillBaal = true; // Kill Baal. Leaves game after wave 5 if false.

		
	// Battle orders script - Use this for 2+ characters (for example BO barb + sorc)
	Scripts.BattleOrders = false;
		Config.BattleOrders.Mode = 0; // 0 = give BO, 1 = get BO
		Config.BattleOrders.Wait = false; // Idle until the player that received BO leaves.
		Config.BattleOrders.Getters = []; // List of players to wait for before casting Battle Orders (mode 0). All players must be in the same area as the BOer.
		
	/* ### leeching section ###
	* Unless stated otherwise, leader's character name isn't needed on order to run.
	* Don't use more scripts of the same type! (Run AutoBaal OR BaalHelper, not both)
	*/

	Config.Leader = ""; // Leader's ingame character name. Leave blank to try auto-detection (works in AutoBaal, Wakka, MFHelper)
	Config.QuitList = [""]; // List of character names to quit with. Example: Config.QuitList = ["MySorc", "MyDin"];
	Config.QuitListMode = 0; // 0 = use character names; 1 = use profile names (all profiles must run on the same computer).

	Scripts.TristramLeech = false; // Enters Tristram, attempts to stay close to the leader and will try and help kill.
	Scripts.TravincalLeech = false; // Enters portal at back of Travincal.
		Config.TravincalLeech.Helper = true; // If set to true the character will teleport to the stairs and help attack.
	Scripts.MFHelper = false; // Run the same MF run as the MFLeader. Leader must have Config.MFLeader = true
	Scripts.Wakka = false; // Walking chaos leecher with auto leader assignment, stays at safe distance from the leader
	Scripts.SealLeecher = false; // Enter safe portals to Chaos. Leader should run SealLeader.
	Scripts.DiabloHelper = false; // Chaos helper, kills monsters and doesn't open seals on its own.
		Config.DiabloHelper.Wait = 120; // Seconds to wait for a runner to be in Chaos. If Config.Leader is set, it will wait only for the leader.
		Config.DiabloHelper.Entrance = true; // Start from entrance. Set to false to start from star.
		Config.DiabloHelper.SkipTP = false; // Don't wait for town portal and directly head to chaos. It will clear monsters around chaos entrance and wait for the runner.
		Config.DiabloHelper.SkipIfBaal = false; // End script if there are party members in a Baal run.
	Scripts.AutoBaal = false; // Baal leecher with auto leader assignment
		Config.AutoBaal.FindShrine = false; // false = disabled, 1 = search after hot tp message, 2 = search as soon as leader is found
		Config.AutoBaal.LeechSpot = [15115, 5050]; // X, Y coords of Throne Room leech spot
		Config.AutoBaal.LongRangeSupport = false; // Cast long distance skills from a safe spot
	Scripts.BaalHelper = false;
		Config.BaalHelper.Wait = 120; // Seconds to wait for a runner to be in Throne
		Config.BaalHelper.KillNihlathak = false; // Kill Nihlathak before going to Throne
		Config.BaalHelper.FastChaos = false; // Kill Diablo before going to Throne
		Config.BaalHelper.DollQuit = false;  // End script if Dolls (Undead Soul Killers) are found.
		Config.BaalHelper.KillBaal = true; // Kill Baal. If set to false, you must configure Config.QuitList or the bot will wait indefinitely.
		Config.BaalHelper.SkipTP = false; // Don't wait for a TP, go to WSK3 and wait for someone to go to throne. Anti PK measure.
	Scripts.Follower = false; // Script that follows a manually played leader around like a merc. For a list of commands, see Follower.js

	// *** special scripts ***
	Scripts.WPGetter = false; // Get missing waypoints
	Scripts.GetKeys = false;  // Hunt for T/H/D keys
	Scripts.OrgTorch = false;
		Config.OrgTorch.MakeTorch = true; // Convert organ sets to torches
		Config.OrgTorch.WaitForKeys = true; // Enable Torch System to get keys from other profiles. See libs/TorchSystem.js for more info
		Config.OrgTorch.WaitTimeout = 15; // Time in minutes to wait for keys before moving on
		Config.OrgTorch.UseSalvation = true; // Use Salvation aura on Mephisto (if possible)
		Config.OrgTorch.GetFade = false; // Get fade by standing in a fire. You MUST have Last Wish or Treachery on your character being worn.
	Scripts.Rusher = false; // Rush bot. For a list of commands, see Rusher.js
		Config.Rusher.WaitPlayerCount = 0; // Wait until game has a certain number of players (0 - don't wait, 8 - wait for full game).
		Config.Rusher.Radament = false; // Do Radament quest.
		Config.Rusher.LamEsen = false; // Do Lam Esen quest.
		Config.Rusher.Izual = false; // Do Izual quest.
		Config.Rusher.Shenk = false; // Do Shenk quest.
		Config.Rusher.Anya = false; // Do Anya quest.
		Config.Rusher.LastRun = ""; // End rush after this run. List of runs: http://pastebin.com/Uez3nZ6g
	Scripts.Rushee = false; // Automatic rushee, works with Rusher. Set Rusher's character name as Config.Leader
		Config.Rushee.Quester = false; // Enter portals and get quest items.
		Config.Rushee.Bumper = false; // Do Ancients and Baal. Minimum levels: 20 - norm, 40 - nightmare
	Scripts.CrushTele = false; // classic rush teleporter. go to area of interest and press "-" numpad key
	Scripts.Questing = false; // solves missing quests (skill/stat+shenk)
	Scripts.Gamble = false; // Gambling system, other characters will mule gold into your game so you can gamble infinitely. See Gambling.js
	Scripts.Crafting = false; // Crafting system, other characters will mule crafting ingredients. See CraftingSystem.js
	Scripts.GhostBusters = false; // Kill ghosts in most areas that contain them
	Scripts.Enchant = false;
		Config.Enchant.Triggers = ["chant", "cows", "wps"]; // Chat commands for enchant, cow level and waypoint giving
		Config.Enchant.GetLeg = false; // Get Wirt's Leg from Tristram. If set to false, it will check for the leg in town.
		Config.Enchant.AutoChant = false; // Automatically enchant nearby players and their minions
		Config.Enchant.GameLength = 20; // Game length in minutes
	Scripts.IPHunter = false;
		Config.IPHunter.IPList = []; // List of IPs to look for. example: [165, 201, 64]
		Config.IPHunter.GameLength = 3; // Number of minutes to stay in game if ip wasn't found
	Scripts.KillDclone = false; // Kill Diablo Clone by using Arcane Sanctuary waypoint. Diablo needs to walk the Earth in the game.
	Scripts.ShopBot = false; // Shopbot script. Automatically uses shopbot.nip and ignores other pickits.
		// Supported NPCs: Akara, Elzix, Fara, Drognan, Ormus, Asheara, Anya. Multiple NPCs are also supported, example: ["Elzix", "Fara"]
		// Use common sense when combining NPCs. Shopping in different acts will probably lead to bugs.
		Config.ShopBot.ShopNPC = "Anya";
		// Put item classid numbers or names to scan (remember to put quotes around names). Leave blank to scan ALL items. See libs/config/templates/ShopBot.txt
		Config.ShopBot.ScanIDs = [];
		Config.ShopBot.CycleDelay = 0; // Delay between shopping cycles in milliseconds, might help with crashes.
		Config.ShopBot.QuitOnMatch = false; // Leave game as soon as an item is shopped.
	Scripts.ChestMania = true; // Open chests in configured areas. See sdk/areas.txt
		// mfing
		Config.ChestMania.Act3 = [79, 80, 81, 82, 83, 93];
		Config.ChestMania.Act5 = [125, 126, 127];
		
		// chesting
		//Config.ChestMania.Act1 = [2, 8, 3, 18, 19, 4, 5, 6, 21, 22, 23, 24, 25, 7, 12, 16, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
		//Config.ChestMania.Act2 = [47, 48, 49, 41, 55, 59, 42, 56, 57, 60, 43, 44, 65, 50, 51, 52, 53, 54, 74]; // Ignored Maggot Lair due to close space, also ignored tal tasha tomb (66 to 72) and Claw Viper Temple (58, 61) because of fking snakes.
		//Config.ChestMania.Act3 = [76, 85, 77, 78, 88, 89, 91, 79, 80, 92, 93, 81, 82, 83, 100, 101, 102];
		//Config.ChestMania.Act4 = [104, 105, 106, 107, 108];
		//Config.ChestMania.Act5 = [110, 111, 125, 112, 126, 113, 115, 116, 117, 127, 118, 128, 129, 130, 122] // ignored Crystalized Passage (113) due to gloams
		
		
		// defaults
		//Config.ChestMania.Act1 = [13, 14, 15, 16, 18, 19]; // List of act 1 areas to open chests in
		//Config.ChestMania.Act2 = [55, 59, 65, 66, 67, 68, 69, 70, 71, 72]; // List of act 2 areas to open chests in
		//Config.ChestMania.Act3 = [79, 80, 81, 92, 93, 84, 85, 90]; // List of act 3 areas to open chests in
		//Config.ChestMania.Act4 = []; // List of act 4 areas to open chests in
		//Config.ChestMania.Act5 = [115, 116, 119, 125, 126, 127]; // List of act 5 areas to open chests in
		
	Scripts.ClearAnyArea = false; // Clear any area. Uses Config.ClearType to determine which type of monsters to kill.
		Config.ClearAnyArea.AreaList = [125, 126, 127]; // List of area ids to clear. See sdk/areas.txt

	// *** Guest scripts ***

	// Baal Assistant by YourGreatestMember
	Scripts.BaalAssistant = false; // Used to leech or help in baal runs.
		Config.BaalAssistant.Wait = 120; // Seconds to wait for a runner to be in the throne / portal wait / safe TP wait / hot TP wait...
		Config.BaalAssistant.KillNihlathak = false; // Kill Nihlathak before going to Throne
		Config.BaalAssistant.FastChaos = false; // Kill Diablo before going to Throne
		Config.BaalAssistant.Helper = true; // Set to true to help attack, set false to to leech.
		Config.BaalAssistant.GetShrine = false; // Set to true to get a experience shrine at the start of the run.
		Config.BaalAssistant.GetShrineWaitForHotTP = false; // Set to true to get a experience shrine after leader shouts the hot tp message as defined in Config.BaalAssistant.HotTPMessage
		Config.BaalAssistant.SkipTP = false; // Set to true to enable the helper to skip the TP and teleport down to the throne room.
		Config.BaalAssistant.WaitForSafeTP = false; // Set to true to wait for a safe TP message (defined in SafeTPMessage)
		Config.BaalAssistant.DollQuit = false; // Quit on dolls. (Hardcore players?)
		Config.BaalAssistant.SoulQuit = false; // Quit on Souls. (Hardcore players?)
		Config.BaalAssistant.KillBaal = true; // Set to true to kill baal, if you set to false you MUST configure Config.QuitList or Config.BaalAssistant.NextGameMessage or the bot will wait indefinitely. 
		Config.BaalAssistant.HotTPMessage = ["Hot"]; // Configure safe TP messages.
		Config.BaalAssistant.SafeTPMessage = ["Safe", "Clear"]; // Configure safe TP messages.
		Config.BaalAssistant.BaalMessage = ["Baal"]; // Configure baal messages, this is a precautionary measure.
		Config.BaalAssistant.NextGameMessage = ["Next Game", "Next", "New Game", "ng"];	// Next Game message, this is a precautionary quit command, Reccomended setting up: Config.QuitList

	// Town settings
	Config.HealHP = 40; // Go to a healer if under designated percent of life.
	Config.HealMP = 0; // Go to a healer if under designated percent of mana.
	Config.HealStatus = false; // Go to a healer if poisoned or cursed
	Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
	Config.MercWatch = true; // Instant merc revive during battle.

	// Potion settings
	Config.UseHP = 90; // Drink a healing potion if life is under designated percent.
	Config.UseRejuvHP = 50;  // Drink a rejuvenation potion if life is under designated percent.
	Config.UseMP = 25; // Drink a mana potion if mana is under designated percent.
	Config.UseRejuvMP = 0; // Drink a rejuvenation potion if mana is under designated percent.
	Config.UseMercHP = 75; // Give a healing potion to your merc if his/her life is under designated percent.
	Config.UseMercRejuv = 0; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
	Config.HPBuffer = 0; // Number of healing potions to keep in inventory.
	Config.MPBuffer = 0; // Number of mana potions to keep in inventory.
	Config.RejuvBuffer = 0; // Number of rejuvenation potions to keep in inventory.

	// Chicken settings
	Config.LifeChicken = 30; // Exit game if life is less or equal to designated percent.
	Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
	Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
	Config.TownHP = 0; // Go to town if life is under designated percent.
	Config.TownMP = 0; // Go to town if mana is under designated percent.

	/* Inventory lock configuration. !!!READ CAREFULLY!!!
	 * 0 = item is locked and won't be moved. If item occupies more than one slot, ALL of those slots must be set to 0 to lock it in place.
	 * Put 0s where your torch, annihilus and everything else you want to KEEP is.
	 * 1 = item is unlocked and will be dropped, stashed or sold.
	 * If you don't change the default values, the bot won't stash items.
	 */
	Config.Inventory[0] = [1,1,1,1,0,0,0,0,0,0];
	Config.Inventory[1] = [1,1,1,1,0,0,0,0,0,0];
	Config.Inventory[2] = [1,1,1,1,0,0,0,0,0,0];
	Config.Inventory[3] = [1,1,1,1,0,0,0,0,0,0];

	Config.StashGold = 100000; // Minimum amount of gold to stash.

	/* Potion types for belt columns from left to right.
	 * Rejuvenation potions must always be rightmost.
	 * Supported potions - Healing ("hp"), Mana ("mp") and Rejuvenation ("rv")
	 */
	Config.BeltColumn[0] = "hp";
	Config.BeltColumn[1] = "mp";
	Config.BeltColumn[2] = "mp";
	Config.BeltColumn[3] = "rv";

	/* Minimum amount of potions. If we have less, go to vendor to purchase more.
	 * Set rejuvenation columns to 0, because they can't be bought.
	 */
	Config.MinColumn[0] = 4;
	Config.MinColumn[1] = 4;
	Config.MinColumn[2] = 4;
	Config.MinColumn[3] = 0;

	// Pickit config. Default folder is kolbot/pickit.
	Config.PickitFiles.push("LinkUnique.nip");
	Config.PickitFiles.push("LinkSets.nip");
	Config.PickitFiles.push("LinkMagicRare.nip");
	Config.PickitFiles.push("LinkSockets.nip");
	Config.PickitFiles.push("LinkMisc.nip");
	
	Config.PickitFiles.push("DubCharms.nip");
	Config.PickitFiles.push("DubMagic.nip");
	Config.PickitFiles.push("DubRare.nip");
	Config.PickitFiles.push("DubUnique.nip");
	Config.PickitFiles.push("DubWhite.nip");
	Config.PickRange = 40; // Pick radius
	Config.FastPick = false; // Check and pick items between attacks

	// Additional item info log settings. All info goes to \logs\ItemLog.txt
	Config.ItemInfo = true; // Log stashed, skipped (due to no space) or sold items.
	Config.ItemInfoQuality = []; // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];

	// Item identification settings
	Config.CainID.Enable = true; // Identify items at Cain
	Config.CainID.MinGold = 3000000; // Minimum gold (stash + character) to have in order to use Cain.
	Config.CainID.MinUnids = 1; // Minimum number of unid items in order to use Cain.
	Config.FieldID = false; // Identify items in the field instead of going to town.
	Config.DroppedItemsAnnounce.Enable = false;	// Announce Dropped Items to in-game newbs
	Config.DroppedItemsAnnounce.Quality = [5, 7, 8]; // Quality of item to announce. See NTItemAlias.dbl for values. Example: Config.DroppedItemsAnnounce.Quality = [6, 7, 8];

	// Repair settings
	Config.CubeRepair = false; // Repair weapons with Ort and armor with Ral rune. Don't use it if you don't understand the risk of losing items.
	Config.RepairPercent = 40; // Durability percent of any equipped item that will trigger repairs.

	// Gambling config
	Config.Gamble = true;
	Config.GambleGoldStart = 2500000;
	Config.GambleGoldStop = 500000;

	// List of item names or classids for gambling. Check libs/NTItemAlias.dbl file for other item classids.
	Config.GambleItems.push("amulet");
	Config.GambleItems.push("ring");
	
	Config.GambleItems.push("circlet");
	Config.GambleItems.push("coronet");
	
	Config.GambleItems.push("leathergloves");
	Config.GambleItems.push("heavygloves");
	Config.GambleItems.push("chaingloves");
	
	Config.GambleItems.push("quiltedarmor");
	Config.GambleItems.push("leatherarmor");
	Config.GambleItems.push("hardleatherarmor");
	Config.GambleItems.push("studdedleather");
	Config.GambleItems.push("lightplate");
	
	Config.GambleItems.push("bardiche");
	Config.GambleItems.push("voulge");
	Config.GambleItems.push("scythe");
	Config.GambleItems.push("poleaxe");
	Config.GambleItems.push("halberd");
	Config.GambleItems.push("warscythe");
	
	Config.GambleItems.push("longwarbow");
	
	Config.GambleItems.push("kiteshield");
	
	/* Cubing config. All recipe names are available in Templates/Cubing.txt. For item names/classids check NTItemAlias.dbl
	 * The format is Config.Recipes.push([recipe_name, item_name_or_classid, etherealness]). Etherealness is optional and only applies to some recipes.
	 */
	Config.Cubing = true; // Set to true to enable cubing.
	
	// Ingredients for the following recipes will be auto-picked, for classids check libs/NTItemAlias.dbl

	//Config.Recipes.push([Recipe.Gem, "Flawless Amethyst"]); // Make Perfect Amethyst
	//Config.Recipes.push([Recipe.Gem, "Flawless Topaz"]); // Make Perfect Topaz
	//Config.Recipes.push([Recipe.Gem, "Flawless Sapphire"]); // Make Perfect Sapphire
	//Config.Recipes.push([Recipe.Gem, "Flawless Emerald"]); // Make Perfect Emerald
	//Config.Recipes.push([Recipe.Gem, "Flawless Ruby"]); // Make Perfect Ruby
	//Config.Recipes.push([Recipe.Gem, "Flawless Diamond"]); // Make Perfect Diamond
	//Config.Recipes.push([Recipe.Gem, "Flawless Skull"]); // Make Perfect Skull

	//Config.Recipes.push([Recipe.Token]); // Make Token of Absolution

	Config.Recipes.push([Recipe.Rune, "Io Rune"]); // Upgrade Io to Lum
	Config.Recipes.push([Recipe.Rune, "Lum Rune"]); // Upgrade Lum to Ko
	Config.Recipes.push([Recipe.Rune, "Ko Rune"]); // Upgrade Ko to Fal
	Config.Recipes.push([Recipe.Rune, "Fal Rune"]); // Upgrade Fal to Lem
	Config.Recipes.push([Recipe.Rune, "Lem Rune"]); // Upgrade Lem to Pul
	Config.Recipes.push([Recipe.Rune, "Pul Rune"]); // Upgrade Pul to Um
	Config.Recipes.push([Recipe.Rune, "Um Rune"]); // Upgrade Um to Mal
	Config.Recipes.push([Recipe.Rune, "Mal Rune"]); // Upgrade Mal to Ist
	Config.Recipes.push([Recipe.Rune, "Ist Rune"]); // Upgrade Ist to Gul
	Config.Recipes.push([Recipe.Rune, "Gul Rune"]); // Upgrade Gul to Vex
	Config.Recipes.push([Recipe.Rune, "Vex Rune"]); // Upgrade Vex to Ohm
	Config.Recipes.push([Recipe.Rune, "Ohm Rune"]); // Upgrade Ohm to Lo
	Config.Recipes.push([Recipe.Rune, "Lo Rune"]); // Upgrade Lo to Sur
	//Config.Recipes.push([Recipe.Rune, "Sur Rune"]); // Upgrade Sur to Ber

	/* Base item for the following recipes must be in pickit. The rest of the ingredients will be auto-picked.
	 * Use Roll.Eth, Roll.NonEth or Roll.All to determine what kind of base item to roll - ethereal, non-ethereal or all.
	 */
	//Config.Recipes.push([Recipe.Socket.Shield, "Monarch", Roll.All]); // Socket Monarch
	//Config.Recipes.push([Recipe.Socket.Shield, "Sacred Targe", Roll.Eth]); // Socket Sacred Targe
	//Config.Recipes.push([Recipe.Socket.Shield, "Zakarum Shield", Roll.Eth]); // Socket Zakarum Shield
	Config.Recipes.push([Recipe.Socket.Shield, "Vortex Shield", Roll.Eth]); // Socket Vortex Shield
	
	//Config.Recipes.push([Recipe.Socket.Armor, "Dusk Shroud", Roll.Eth]); // Socket Dusk Shroud
	//Config.Recipes.push([Recipe.Socket.Armor, "Wyrmhide", Roll.Eth]); // Socket Wyrmhide
	//Config.Recipes.push([Recipe.Socket.Armor, "Scarab Husk", Roll.Eth]); // Socket Scarab Husk
	//Config.Recipes.push([Recipe.Socket.Armor, "Wire Fleece", Roll.Eth]); // Socket Wire Fleece
	//Config.Recipes.push([Recipe.Socket.Armor, "Diamond Mail", Roll.Eth]); // Socket Diamond Mail
	//Config.Recipes.push([Recipe.Socket.Armor, "Loricated Mail", Roll.Eth]); // Socket Loricated Mail
	//Config.Recipes.push([Recipe.Socket.Armor, "Great Hauberk", Roll.Eth]); // Socket Great Hauberk
	//Config.Recipes.push([Recipe.Socket.Armor, "Boneweave", Roll.Eth]); // Socket Boneweave
	//Config.Recipes.push([Recipe.Socket.Armor, "Balrog Skin", Roll.Eth]); // Socket Balrog Skin
	//Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate", Roll.Eth]); // Socket Archon Plate
	//Config.Recipes.push([Recipe.Socket.Armor, "Kraken Shell", Roll.Eth]); // Socket Kraken Shell
	//Config.Recipes.push([Recipe.Socket.Armor, "Hellforge Plate", Roll.Eth]); // Socket Hellforge Plate
	//Config.Recipes.push([Recipe.Socket.Armor, "Lacquered Plate", Roll.Eth]); // Socket Lacquered Plate
	//Config.Recipes.push([Recipe.Socket.Armor, "Shadow Plate", Roll.Eth]); // Socket Shadow Plate
	//Config.Recipes.push([Recipe.Socket.Armor, "Sacred Armor", Roll.Eth]); // Socket Sacred Armor
	
	Config.Recipes.push([Recipe.Socket.Weapon, "Thresher", Roll.Eth]); // Socket Thresher
	Config.Recipes.push([Recipe.Socket.Weapon, "Giant Thresher", Roll.Eth]); // Socket Giant Thresher
	Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe", Roll.Eth]); // Socket Cryptic Axe
	//Config.Recipes.push([Recipe.Socket.Weapon, "Colossus Voulge", Roll.Eth]); // Socket Cryptic Axe
	Config.Recipes.push([Recipe.Socket.Weapon, "Great Poleaxe", Roll.Eth]); // Socket Cryptic Axe
	
	//Config.Recipes.push([Recipe.Socket.Weapon, "Phase Blade", Roll.All]); // Socket Phase Blade
	
	
	//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Heavy Gloves", Roll.NonEth]); // Upgrade Bloodfist to Exceptional
	//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Light Gauntlets", Roll.NonEth]); // Upgrade Magefist to Exceptional
	Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Light Plated Boots", Roll.NonEth]); // Upgrade Goblin Toe to Exceptional
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Sharkskin Gloves", Roll.NonEth]); // Upgrade Bloodfist or Grave Palm to Elite
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Battle Gauntlets", Roll.NonEth]); // Upgrade Magefist or Lavagout to Elite
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "War Boots", Roll.NonEth]); // Upgrade Gore Rider to Elite

	Config.Recipes.push([Recipe.Caster.Amulet]); // Craft Caster Amulet
	Config.Recipes.push([Recipe.Blood.Ring]); // Craft Blood Ring
	Config.Recipes.push([Recipe.Blood.Gloves, "Vampirebone Gloves"]); // Craft Blood Vampirebone Gloves
	//Config.Recipes.push([Recipe.Blood.Helm, "Armet"]); // Craft Blood Armet
	//Config.Recipes.push([Recipe.HitPower.Gloves, "Vambraces"]); // Craft Hit Power Vambraces

	// The gems not used by other recipes will be used for magic item rerolling.

	Config.Recipes.push([Recipe.Reroll.Magic, "Grand Charm"]); // Reroll magic Grand Charm (ilvl 91+)
	Config.Recipes.push([Recipe.Reroll.Magic, "Small Charm"]); // Reroll magic Small Charm (ilvl 91+)
	//Config.Recipes.push([Recipe.Reroll.Magic, "Diadem"]); // Reroll magic Diadem
	//Config.Recipes.push([Recipe.Reroll.Rare, "Diadem"]); // Reroll rare Diadem
	
	/* Runeword config. All recipes are available in Templates/Runewords.txt
	 * Keep lines follow pickit format and any given runeword is tested vs ALL lines so you don't need to repeat them
	 */
	Config.MakeRunewords = true; // Set to true to enable runeword making/rerolling

	Config.Runewords.push([Runeword.Insight, "Thresher"]); // Make Insight Thresher
	Config.Runewords.push([Runeword.Insight, "Cryptic Axe"]); // Make Insight Cryptic Axe
	//Config.Runewords.push([Runeword.Insight, "Colossus Voulge"]); // Make Insight Cryptic Axe
	Config.Runewords.push([Runeword.Insight, "Great Poleaxe"]); // Make Insight Cryptic Axe

	//Config.Runewords.push([Runeword.Spirit, "Monarch"]); // Make Spirit Monarch
	//Config.Runewords.push([Runeword.Spirit, "Sacred Targe"]); // Make Spirit Sacred Targe

	//Config.Runewords.push([Runeword.Smoke, "Boneweave"]); // Make Smoke Boneweave
	
	Config.KeepRunewords.push("[type] == shield || [type] == auricshields # [fcr] >= 30"); // Keep Spirit
	Config.KeepRunewords.push("[type] == polearm # [meditationaura] == 17"); // Keep insight
	Config.KeepRunewords.push("[type] == armor"); // Keep Smoke

	// Public game options

	// If Config.Leader is set, the bot will only accept invites from leader. If Config.PublicMode is not 0, Baal and Diablo script will open Town Portals.
	Config.PublicMode = 0; // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
	// Party message settings. Each setting represents an array of messages that will be randomly chosen.
	// $name, $level, $class and $killer are replaced by the player's name, level, class and killer
	Config.Greetings = []; // Example: ["Hello, $name (level $level $class)"]
	Config.DeathMessages = []; // Example: ["Watch out for that $killer, $name!"]
	Config.Congratulations = []; // Example: ["Congrats on level $level, $name!"]
	Config.ShitList = false; // Blacklist hostile players so they don't get invited to party.
	Config.UnpartyShitlisted = false; // Leave party if someone invited a blacklisted player.

	// General config
	Config.AutoMap = false; // Set to true to open automap at the beginning of the game.
	Config.LastMessage = ""; // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
	Config.MinGameTime = 60; // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
	Config.MaxGameTime = 1250; // Maximum game time in seconds. Quit game when limit is reached.
	Config.TeleSwitch = false; // Switch to slot II when teleporting more than 1 node.
	Config.OpenChests = true; // Open chests. Controls key buying.
	Config.MiniShopBot = false; // Scan items in NPC shops.
	Config.PacketShopping = false; // Use packets to shop. Improves shopping speed.
	Config.TownCheck = true; // Go to town if out of potions
	Config.LogExperience = true; // Print experience statistics in the manager.
	Config.PingQuit = [{Ping: 200, Duration: 30}]; // Quit if ping is over the given value for over the given time period in seconds.

	// Shrine Scanner - scan for shrines while moving.
	// Put the shrine types in order of priority (from highest to lowest). For a list of types, see sdk/shrines.txt
	Config.ScanShrines = [15,12,6,10,9,8,11,13]; // mfing
	//Config.ScanShrines = [13,6,10,9,8,11,12]; // chesting

	// MF Switch
	Config.MFSwitchPercent = 0; // Boss life % to switch weapons at. Set to 0 to disable.
	Config.MFSwitch = 1; // MF weapon slot: 0 = slot I, 1 = slot II

	// Speedup config. Full packet casting is not recommended for melee skills.
	Config.FCR = 0; // 0 - disable, 1 to 255 - set value of Faster Cast Rate.
	Config.FHR = 0; // 0 - disable, 1 to 255 - set value of Faster Hit Recovery.
	Config.FBR = 0; // 0 - disable, 1 to 255 - set value of Faster Block Recovery.
	Config.IAS = 0; // 0 - disable, 1 to 255 - set value of Increased Attack Speed.
	Config.PacketCasting = 0; // 0 = disable, 1 = packet teleport, 2 = full packet casting.
	Config.WaypointMenu = true;

	// Anti-hostile config
	Config.AntiHostile = false; // Enable anti-hostile.
	Config.HostileAction = 0; // 0 - quit immediately, 1 - quit when hostile player is sighted, 2 - attack hostile.
	Config.TownOnHostile = false; // Go to town instead of quitting when HostileAction is 0 or 1.
	Config.RandomPrecast = false; // Anti-PK measure, only supported in Baal and BaalHelper and BaalAssisstant at the moment.
	Config.ViperCheck = false; // Quit if revived Tomb Vipers are sighted.

	// DClone config
	Config.StopOnDClone = true; // Go to town and idle as soon as Diablo walks the Earth
	Config.SoJWaitTime = 30; // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
	Config.KillDclone = true; // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
	Config.DCloneQuit = false; // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled

	// Monster skip config
	// Skip immune monsters. Possible options: "fire", "cold", "lightning", "poison", "physical", "magic".
	// You can combine multiple resists with "and", for example - "fire and cold", "physical and cold and poison"
	Config.SkipImmune = [];
	// Skip enchanted monsters. Possible options: "extra strong", "extra fast", "cursed", "magic resistant", "fire enchanted", "lightning enchanted", "cold enchanted", "mana burn", "teleportation", "spectral hit", "stone skin", "multiple shots".
	// You can combine multiple enchantments with "and", for example - "cursed and extra fast", "mana burn and extra strong and lightning enchanted"
	Config.SkipEnchant = [];
	// Skip monsters with auras. Possible options: "fanaticism", "might", "holy fire", "blessed aim", "holy freeze", "holy shock". Conviction is bugged, don't use it.
	Config.SkipAura = [];
	// Ignore skips (immune, enchant and aura) and kills monsters by NAMES or CLASSIDS. Only works if Config.TeleStomp is enabled.
	//Config.SkipIgnore = [] //Example: Config.SkipIgnore = ["Andariel", 243];
	//Config.SkipIgnore = [710] // the countess

	/* Attack config
	 * To disable an attack, set it to -1
	 * Skills MUST be POSITIVE numbers. For reference see http://pastebin.com/baShRwWM
	 */
	
	// Chain Light
	Config.AttackSkill[0] = -1; // Preattack skill.
	Config.AttackSkill[1] = 49; // Primary skill to bosses.
	Config.AttackSkill[2] = -1; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	Config.AttackSkill[3] = 53; // Primary skill to others.
	Config.AttackSkill[4] = -1; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.

	// Blizzard
	//Config.AttackSkill[0] = -1; // Preattack skill.
	//Config.AttackSkill[1] = 59; // Primary skill to bosses.
	//Config.AttackSkill[2] = 55; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	//Config.AttackSkill[3] = 59; // Primary skill to others.
	//Config.AttackSkill[4] = 55; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	//Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	//Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.
	
	// Blizzard and Fireball
	//Config.AttackSkill[0] = 55; // Preattack skill.
	//Config.AttackSkill[1] = 59; // Primary skill to bosses.
	//Config.AttackSkill[2] = 47; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	//Config.AttackSkill[3] = 59; // Primary skill to others.
	//Config.AttackSkill[4] = 47; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	//Config.AttackSkill[5] = 59; // Secondary skill if monster is immune to primary.
	//Config.AttackSkill[6] = 47; // Secondary untimed skill if monster is immune to primary untimed.
	
	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Timed low mana skill.
	Config.LowManaSkill[1] = -1; // Untimed low mana skill.	

	/* Advanced Attack config. Allows custom skills to be used on custom monsters.
	 *	Format: "Monster Name": [timed skill id, untimed skill id]
	 *	Example: "Baal": [38, -1] to use charged bolt on Baal
	 *	Multiple entries are separated by commas
	 */
	Config.CustomAttack = {
		//"Nihlathak": [53]
		//"Monster Name": [-1, -1]
	};

	Config.Dodge = true; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
	Config.DodgeRange = 10; // Distance to keep from monsters.
	Config.DodgeHP = 90; // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
	Config.BossPriority = false; // Set to true to attack Unique/SuperUnique monsters first when clearing
	Config.ClearType = 0xF; // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Config.TeleStomp = true; // Use merc to attack bosses if they're immune to attacks, but not to physical damage

	// Wereform setup. Make sure you read Templates/Attacks.txt for attack skill format.
	Config.Wereform = false; // 0 / false - don't shapeshift, 1 / "Werewolf" - change to werewolf, 2 / "Werebear" - change to werebear

	// Class specific config
	Config.CastStatic = 60; // Cast static until the target is at designated life percent. 100 = disabled.
	//Config.StaticList = []; // List of monster NAMES or CLASSIDS to static. Example: Config.StaticList = ["Andariel", 243];
	Config.StaticList = [156, 211, 242, 243, 544]; // andariel, duriel, mephisto, diablo, baalcrab
	
	// AutoBuild System ( See /d2bs/kolbot/libs/config/Builds/README.txt for instructions )
	Config.AutoBuild.Enabled = false	//	This will enable or disable the AutoBuild system
	
	Config.AutoBuild.Template = "" //       The name of the build associated with an existing
												//	template filename located in libs/config/Builds/

	Config.AutoBuild.Verbose = true;			//	Allows script to print messages in console
	Config.AutoBuild.DebugMode = true;			//	Debug mode prints a little more information to console and 
												//	logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
												//	It automatically enables Config.AutoBuild.Verbose
}