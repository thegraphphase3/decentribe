import { Transfer, Approval, MinterAdded, MinterRemoved } from '../generated/Decent/Decent'
import { Transfertx, Approvaltx, Minteraddedtx, Minterremovedtx  } from '../generated/schema'
import { Decent } from '../generated/Decent/Decent'


export function handleTransfer(event: Transfer): void {
  let id = event.params.from
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())

  let transfertx = new Transfertx(id)

  // contrat import
  let contract = Decent.bind(event.address)
  // infos
  let erc20Symbol = contract.symbol()
  let totalSupply = contract.totalSupply()


  transfertx.erc20Symbol = erc20Symbol
  transfertx.totalSupply = totalSupply

  transfertx.from = event.params.from
  transfertx.to = event.params.to
  transfertx.value = event.params.value

  transfertx.transaction = event.transaction.hash
  transfertx.blockNumber = event.block.number
  transfertx.blockTimestamp = event.block.timestamp

  transfertx.save()
}

export function handleApproval(event: Approval): void {
  let id = event.params.owner
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())

  let Approvaltx = new Approvaltx(id)

  // contrat import
  let contract = Decent.bind(event.address)
  // infos
  let erc20Symbol = contract.symbol()
  let totalSupply = contract.totalSupply()


  Approvaltx.erc20Symbol = erc20Symbol
  Approvaltx.totalSupply = totalSupply


  Approvaltx.owner = event.params.owner
  Approvaltx.spender = event.params.spender
  Approvaltx.value = event.params.value

  Approvaltx.transaction = event.transaction.hash
  Approvaltx.blockNumber = event.block.number
  Approvaltx.blockTimestamp = event.block.timestamp

  Approvaltx.save()
}

export function handleMinterAdded(event: MinterAdded): void {
  let id = event.params.account
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())
  let Minteraddedtx = new Minteraddedtx(id)

  let paramss = event.params.account

  // contrat import
  let contract = Decent.bind(event.address)
  // infos
  let erc20Symbol = contract.symbol()
  let totalSupply = contract.totalSupply()


  Minteraddedtx.erc20Symbol = erc20Symbol
  Minteraddedtx.totalSupply = totalSupply


  Minteraddedtx.account = paramss

  Minteraddedtx.transaction = event.transaction.hash
  Minteraddedtx.blockNumber = event.block.number
  Minteraddedtx.blockTimestamp = event.block.timestamp

  Minteraddedtx.save()
}

export function handleMinterRemoved(event: MinterRemoved): void {
  let id = event.params.account
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())
  let Minterremovedtx = new Minterremovedtx(id)

  let paramss = event.params.account


  // contrat import
  let contract = Decent.bind(event.address)
  // infos
  let erc20Symbol = contract.symbol()
  let totalSupply = contract.totalSupply()


  Minterremovedtx.erc20Symbol = erc20Symbol
  Minterremovedtx.totalSupply = totalSupply

  Minterremovedtx.account = paramss

  Minterremovedtx.transaction = event.transaction.hash
  Minterremovedtx.blockNumber = event.block.number
  Minterremovedtx.blockTimestamp = event.block.timestamp

  Minterremovedtx.save()
}



