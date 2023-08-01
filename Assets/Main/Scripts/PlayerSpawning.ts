import { AudioListener } from 'UnityEngine';
import { LocalPlayer, SpawnInfo, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { WorldService } from 'ZEPETO.World';

export default class PlayerSpawning extends ZepetoScriptBehaviour {

    Start()
    {       
        // Grab the user id specified from logging into zepeto through the editor.
        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, new SpawnInfo(), true);            
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() =>
        {           
            const player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
            player.zepetoPlayer.character.gameObject.AddComponent<AudioListener>();
        });
    }

}