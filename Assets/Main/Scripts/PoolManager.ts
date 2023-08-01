import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PoolObject from './PoolObject'
import { GameObject, Vector3 } from 'UnityEngine';

export default class PoolManager
{
    public static poolObjects: PoolObject[] = [];
    public static init : boolean = false;
    
    static PlaySound(position: Vector3)
    {
        this.Init()
        let currentPooled = this.GetNext();
        if(!currentPooled)
        {
            return;
        }
        currentPooled.PlaySound(position);
    }
    
    static PlayParticle(position: Vector3)
    {
        this.Init()
        let currentPooled = this.GetNext();
        if(!currentPooled)
        {
            return;
        }
        currentPooled.PlayParticle(position);
    }

    static GetNext() : PoolObject
    {
        for(let i = 0; i < 5; i++)
        {
            if(this.poolObjects[i].ready == true)
            {
                return this.poolObjects[i];
            }
        };

        console.log("WARNING: Not enough pooled objects...");
        return null;
    }

    static Init()
    {
        if(!PoolManager.init)
        {
            this.poolObjects.push(GameObject.Find("Pooling #1").GetComponent<PoolObject>());
            this.poolObjects.push(GameObject.Find("Pooling #2").GetComponent<PoolObject>());
            this.poolObjects.push(GameObject.Find("Pooling #3").GetComponent<PoolObject>());
            this.poolObjects.push(GameObject.Find("Pooling #4").GetComponent<PoolObject>());
            this.poolObjects.push(GameObject.Find("Pooling #5").GetComponent<PoolObject>());
        }
    }


}