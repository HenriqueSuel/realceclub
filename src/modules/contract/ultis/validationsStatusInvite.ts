import { INVITE_STATUS } from "../../../constants/inviteStatus.contants"

const LIST_STATUS = [INVITE_STATUS.send, INVITE_STATUS.accepted, INVITE_STATUS.refused]

export const validationStatusInivte = (status: string): boolean => {
    return LIST_STATUS.some(s => s === status)
}