import { AudioSource, ParticleSystem, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PoolObject extends ZepetoScriptBehaviour
{
    @HideInInspector()
    public ready : boolean;

    public sound : AudioSource;
    public particle : ParticleSystem;

    Start()
    {
        this.ready = true;
    }

    PlaySound(position: Vector3)
    {
        this.gameObject.transform.position = position;
        this.sound.Play();
        this.ready = false;
    }

    PlayParticle(position: Vector3)
    {
        this.gameObject.transform.position = position;
        this.particle.Play();
        this.ready = false;
    }

    Update()
    {
        if(this.ready == false && this.sound.isPlaying == false && this.particle.isPlaying == false)
        {
            this.ready = true;
        }
    }
 
}