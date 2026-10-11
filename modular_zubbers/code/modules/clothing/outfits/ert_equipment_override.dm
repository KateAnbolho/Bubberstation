/datum/outfit/centcom/ert/commander
	l_hand = /obj/item/gun/energy/e_gun/stun
	glasses = /obj/item/clothing/glasses/hud/security/sunglasses/guard/medical

/datum/outfit/centcom/ert/security
	l_hand = /obj/item/gun/energy/e_gun/stun
	glasses = /obj/item/clothing/glasses/hud/security/sunglasses/guard/medical

/datum/outfit/centcom/ert/security/alert
	l_hand = /obj/item/gun/ballistic/automatic/battle_rifle
	l_pocket = /obj/item/storage/pouch/ammo
	backpack_contents = list(
		/obj/item/ammo_box/magazine/m38 = 3)

/datum/outfit/centcom/ert/medic
	l_hand = /obj/item/gun/energy/e_gun/stun
	r_hand = /obj/item/storage/medkit/regular
	belt = /obj/item/storage/backpack/duffelbag/deforest_medkit/stocked
	glasses = /obj/item/clothing/glasses/hud/security/sunglasses/guard/medical

/datum/outfit/centcom/ert/engineer
	l_hand = /obj/item/gun/energy/e_gun/stun
	glasses = /obj/item/clothing/glasses/hud/security/sunglasses/guard/medical

///  MOD EQUIPMENT

/obj/item/mod/control/pre_equipped/responsory/commander
	additional_modules = list(/obj/item/mod/module/shooting_assistant/ert, /obj/item/mod/module/holster, /obj/item/mod/module/status_readout/operational)

/obj/item/mod/control/pre_equipped/responsory/security
	additional_modules = list(/obj/item/mod/module/shooting_assistant/ert, /obj/item/mod/module/holster, /obj/item/mod/module/status_readout/operational)

/obj/item/mod/control/pre_equipped/responsory/medic
	additional_modules = list(/obj/item/mod/module/defibrillator/combat, /obj/item/mod/module/holster, /obj/item/mod/module/status_readout/operational)

/obj/item/mod/control/pre_equipped/responsory/medic/alert
	additional_modules = /obj/item/mod/module/shooting_assistant/ert

/obj/item/mod/control/pre_equipped/responsory/engineer
	additional_modules = list(/obj/item/mod/module/holster, /obj/item/mod/module/status_readout/operational)

/obj/item/mod/control/pre_equipped/responsory/engineer/alert
	additional_modules = /obj/item/mod/module/shooting_assistant/ert
