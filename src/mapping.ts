import { Transfer } from '../generated/Decent/Decent'
import { Transfertx } from '../generated/schema'

export function handleTransfer(event: Transfer): void {
  let id = event.params.to
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())

  let transfertx = new Transfertx(id)
  transfertx.from = event.params.from
  transfertx.to = event.params.to
  transfertx.value = event.params.value
  transfertx.save()
}