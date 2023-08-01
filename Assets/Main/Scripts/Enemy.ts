import { Collision, Object } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PoolManager from './PoolManager';

export default class Enemy extends ZepetoScriptBehaviour
{

    OnTriggerEnter(collision: Collision)
    {
        Object.Destroy(this.gameObject);
        PoolManager.PlayParticle(this.gameObject.transform.position);
        PoolManager.PlaySound(this.gameObject.transform.position);
        console.log("Range Entered!");
    }

}