import { AudioSource, ParticleSystem } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PlaySound extends ZepetoScriptBehaviour {

    public source : ParticleSystem;

    Start()
    {    
        this.source = this.gameObject.GetComponent<ParticleSystem>();
        this.source.Play();
    }

}