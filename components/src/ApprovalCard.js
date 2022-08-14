import React from 'react';

const ApprovalCard = () => {
    return (
        <div className='ui card'>
            <div class="card">
                <div class="content">
                    Are you sure?
                </div>
                <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">Approve</div>
                        <div class="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;